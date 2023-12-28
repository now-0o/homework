### 1. 라이브러리 설치
```
$ npm init
$ npm i @aws-sdk/client-s3 express multer multer-s3
```

`@aws-sdk/client-s3` AWS SDK for JavaScript의 S3 클라이언트를 제공하는 패키지
`multer` 파일 업로드를 처리하기 위한 미들웨어
`multer-s3` Amazon S3 스토리지에 업로드를 도와주는 Multer 스토리지 엔진

### 2. app.js 코드 작성
```javascript
const { S3Client } = require('@aws-sdk/client-s3')
const express = require('express')
const multer = require('multer')
const multerS3 = require('multer-s3')

const app = express()

const s3 = new S3Client()

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'some-bucket', // 저장하고자하는 S3 버킷명
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString()) // 업로드 파일의 명칭을 업로드 시각으로 설정
    }
  }),

  // 업로드 할 수 있는 파일 1개의 최대 용량을 제한
  limits: {
    fileSize: 1000 * 1000 * 10 // 10MB
  }
})

app.post('/upload', upload.array('photos', 3), function(req, res) {
  res.send('Successfully uploaded ' + req.files.length + ' files!')
}) // upload로 post 요청을 받을 시 photos 필드의 최대 3개의 파일을 업로드
```

### 3. AWS S3 셋팅
#### AWS S3 버킷 생성
![](https://velog.velcdn.com/images/now-0o/post/230dfc6f-02bf-4420-b028-b1957c8cbaf2/image.png)

![](https://velog.velcdn.com/images/now-0o/post/cfe8ab2f-c6f2-42e6-9c3e-2343394eddbb/image.png)

S3에 들어간 후 버킷 만들기 클릭

![](https://velog.velcdn.com/images/now-0o/post/4e7cf287-9693-40b2-b162-e17965706258/image.png)

![](https://velog.velcdn.com/images/now-0o/post/3564d517-b558-44dd-ab97-67921aa71cd5/image.png)

AWS 리전, 버킷 이름 설정 후. ** 퍼블릿 액세스 차단 해제 **
( 웹 페이지에 사용자가 조회할 이미지를 업로드할 것이기 때문에)

![](https://velog.velcdn.com/images/now-0o/post/6a0c995c-fe00-4511-96ab-6c10139ab262/image.png)

이 후 버킷 만들기를 클릭하여 버킷을 생성해준다.
그 다음 생성된 버킷에 들어가 권한 탭을 클릭하여 버킷 정책을 입력해주어야 한다.

![](https://velog.velcdn.com/images/now-0o/post/be4a0392-1db3-4cf2-b36b-a0011143cda9/image.png)
![](https://velog.velcdn.com/images/now-0o/post/b859e377-c41c-4085-bda3-63b31a7591e5/image.png)

편집을 클릭하고 새 문 추가 클릭.

![](https://velog.velcdn.com/images/now-0o/post/bf326a74-3628-467c-baa6-05d82ea8378b/image.png)

모든 서비스 > S3 > GetObject

![](https://velog.velcdn.com/images/now-0o/post/ed8c0ce4-06fa-4da0-b93b-c750f7477618/image.png)

그 후 리소스 추가를 클릭하여 리소스 유형을 **object**로 설정하고 리소스 ARN에 
`arn:aws:s3:::생성한 버킷명/*`을 입력해준다.
> *(와일드카드)를 입력하여 버킷 내에 모든 객체에 접근할 수 있도록 설정한다.

왼쪽 정책란에  **"Principal": "*",** 로 입력해주고 마지막으로 변경사항 저장 눌러주기

#### IAM에서 액세스키 발급 받기
![](https://velog.velcdn.com/images/now-0o/post/4e6c2a63-8706-43a8-bab4-e33a894aecb4/image.png)
![](https://velog.velcdn.com/images/now-0o/post/f1743db2-dbd8-43ac-9606-00e4ebb8a524/image.png)

IAM > 사용자 탭으로 들어간 후 사용자 생성을 눌러준다.

![](https://velog.velcdn.com/images/now-0o/post/ca6b088a-f460-4fdf-a225-a9f54a326ab0/image.png)
![](https://velog.velcdn.com/images/now-0o/post/8e432d44-4dda-4eb6-a8bd-c456325509a3/image.png)

사용자 이름을 입력한 후 다음 탭에서 권한 옵션을 직접 정책 연결로 설정
권한 정책에서 S3FULL을 검색한 후 AmazonS3FullAccess를 선택한다.
> **AmazonS3FullAccess**은 S3에 대한 모든 권한을 부여한다.
읽기, 쓰기, 조회, 삭제등...

다음 클릭 > 사용자 생성 클릭

![](https://velog.velcdn.com/images/now-0o/post/d5cbeeac-85b4-4cc5-a3c8-82f1891f3e2a/image.png)
![](https://velog.velcdn.com/images/now-0o/post/f88e1aee-c969-4444-a0f0-fd9d920b638f/image.png)
![](https://velog.velcdn.com/images/now-0o/post/4d46b92f-77e5-46ed-8956-338dd1637e66/image.png)

생성된 사용자를 클릭한 후  보안 자격 증명에 들어가 액세스 키를 생성한다.

![](https://velog.velcdn.com/images/now-0o/post/37955f90-c434-4c0b-8b22-4d42837529f6/image.png)
![](https://velog.velcdn.com/images/now-0o/post/db5bbd17-65e5-4129-9219-6d958a30876d/image.png)

AWS 외부에서 실행되는 애플리케이션 선택 후 다음 > 액세스 키 생성을 하면 액세스 키가 생성된다.

### 4. app.js에 AWS S3에 대한 정보 입력
```javascript
const { S3Client } = require('@aws-sdk/client-s3')
const express = require('express')
const multer = require('multer')
const multerS3 = require('multer-s3')

const app = express()

const s3 = new S3Client({
  credentials: {
    accessKeyId: "액세스 키 ID", // 발급한 액세스 ID 입력
    secretAccessKey: "시크릿 키" // 발급한 시크릿 키 입력
  }
})

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'bucketwooje', // 생성한 버킷명
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  }),

  // 업로드 할 수 있는 파일 1개의 최대 용량을 제한
  limits: {
    fileSize: 1000 * 1000 * 10 // 10MB
  }
})

app.post('/upload', upload.array('photos', 3), function(req, res, next) {
  res.send('Successfully uploaded ' + req.files.length + ' files!')
})
```
