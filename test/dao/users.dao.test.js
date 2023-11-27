import mongoose from "mongoose";
import userDao from "";
import  Assert  from "assert";

mongoose.connect(` `) //Coneccion a la BD dentro de los parentesis

const assert = Assert.strict;

//Contexto
describe('Testing User Dao', ()=>{
    
    before(function() {
        this.userDao = new userDao()
    });
    
    beforeEach(function(){
        this.timeout(5000);
    });
    
    //Test 1
    it('', async function (){
        //Given
        console.log(this.userDao );
        const isArray = true;

        //Then
        const result = await this.userDao.get();
        console.log(`El resultado es un Array: ${Array.isArray(result)}`);
        
        //Assert
        assert.strictEqual(Array.isArray(result), isArray);
    })

    //Test 2
    it('', async function (){
        //Given
        let mockUser = {
            first_name: "Uuario prueba 1",
            last_name: "Apellido prueba 1",
            mail: "correodeprueba@gmail.com",
            password: "1234"
        }

        //Then
        const result = await this.userDao.save(mockUser);

        //Assert
        assert.ok(result._id);
    })
})
