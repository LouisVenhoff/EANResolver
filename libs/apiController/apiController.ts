import axios from "axios";

class ApiController{

    private host:string;
    private port:number;

    constructor(host:string, port:number)
    {
        this.host = host;
        this.port = port;
    }


    public async resolveEan():Promise<string> {
        let response:any = await axios.get("asdssdfsd", {});

        return new Promise((resolve, reject) => {resolve(response.toString())});

    }

    


};

export default ApiController;