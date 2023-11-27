import chai from "chai";
import supertest from "supertest";

const expect = chai.expect;


const requester = supertest('http://localhost:8080');

describe("Testeando login y sessions", () =>{
    before(function(){
        this.cookie;
        this.mockUser = {
            first_name: "Usuario prueba 1",
            last_name: "Appelido prueba 1",
            email: "correodeprueba@gmail.com",
            password: "1234"
        }
    })

    //Test 1
    it("Resgistro correcto", async function (){
        //Given
        console.log(this.mockUser);

        //Then
        const { statusCode, _body } = (await requester.post('/api/sessions/resgister')).send(this.mockUser);
        
        //Assert
        expect(statusCode).is.eqls(200);
    })

    //Test 2
    it("Debe poder ingresar con el registro", async function (){
        //Given
        const mockLogin = {
            email: this.mockUser.email,
            password: this.mockUser.password,
        }

        //Then
        const result = await requester.post('/api/sessions/login').send(mockLogin);
        const cookieResult = result.headers['set-cookie'][0]
        console.log(cookieResult);
        
        //Assert
        expect(result.statusCode).is.equal(200)

        const cookieData = cookieResult.split("=")
        this.cookie = {
            name: cookieData[0],
            value: cookieData[1]
        }
    })

    //Test 3 - Ruta Protegida
    it("Ruta Protegida", async function(){

        //Then 
        const { _body } = await requester.get('/api/sessions/current').set('Cookie', [`${this.cookie.name}=${this.cookie.value}`]);
        console.log(_body);

        //Assert
        expect(_body.payload.email).to.be.ok.and.eql(this.mockUser.email)
    })
})

// describe('Testing Ecommerce', () =>{
//     //Local

//     //Test 1
//     it("", async () => {
//         //Given
//         const listaProducto = {
//             name: "",
//             price: 100,
//         }

//         //Then
//         const { statusCode, _body } = await requester.post('/api/products').send(listaProducto)


//         //Assert
//         expect(statusCode).is.eqls(200);
//         expect(_body.payload).is.ok.and.to.have.property("_id")
//     })

//     //Test 2
//     it("", async () =>{
//         //Given
//         const productMock = {
//             name: "",
//             code: 123,
//         }

//         //Then
//         const { statusCode, _body } = await requester.post('/api/products').send(productMock)

//         //Assert
//         expect(statusCode).is.eqls(400)
//         expect(_body).is.ok.and.to.have.property('error')
//     })
// })