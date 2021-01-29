import { expect } from "chai";
import { beforeEach } from "mocha";
import fetch from "node-fetch";
describe("test response from jsonplaceholder.typicode.com/tasks", () => {

    const url = "https://jsonplaceholder.typicode.com/todos";
    
    beforeEach(() => {
    
    });

    it("should have 200 todos at '/todos'", async () => {
        const response = await fetch(url);
        const json: ITask[] = await response.json();
        expect(json).to.have.length(200);
    });

    it("should create a todo '/todos'", async () => {
        const record = { title: "Test 0815", userId: 1 } as ITask;
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(record),
            headers: {
                "accept":"application/json"
            }
        });
        const json: ITask = await response.json();
        console.log(json);
        expect(json.id).to.be.equal(201);
    });
})

interface ITask {
    userId?:number;
    id?:number;
    title?:string;
    completed?:boolean;
}
