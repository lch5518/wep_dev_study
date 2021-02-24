import express from "express"

class Server {
    // 초기화
    private app:express.Application;
    
    // 여러분도 잘 아는 생성자
    constructor() {
        // app 변수에 express 객체를 제공합니다.
        this.app = express();
        // router 선언
        this.router();
    }
    
    private router() {
        // router를 삽입
        this.app.get('/', (req: Request, res: Response) => {
            res.json({ hello: 'world'})
        })
    }
    // Server class 에서 app 을 내보내는 용도로 사용할 메서드
    public getInstance () {
        return this.app;
    }
}

export default Server