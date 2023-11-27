import mongoose from "mongoose";
import cartDao from "../../src/service/dao/models/carts.model.js";
import  Assert  from "assert";

mongoose.connect(`mongodb+srv://disagustinalopez:RtPszX4bFwr4t0VB@cluster0.mfqjqym.mongodb.net/ecommerce?retryWrites=true&w=majority`) //Coneccion a la BD dentro de los parentesis

const assert = Assert.strict;

//Contexto
describe('Testing Products Dao', ()=>{
    
    before(function() {
        this.cartDao = new cartDao()
    });
    
    beforeEach(function(){
        this.timeout(5000);
    });
    
    //Test 1
    it('Que se muestre como Array', async function (){
        //Given
        console.log(this.cartDao);
        const isArray = true;

        //Then
        const result = await this.cartDao.get();
        console.log(`El resultado es un Array: ${Array.isArray(result)}`);
        
        //Assert
        assert.strictEqual(Array.isArray(result), isArray);
    })

    //Test 2
    it('Creador de carrito', async function (){
        //Given
        let mockCart = {
            type: "prueba",
        }

        //Then
        const result = await this.userDao.save(mockCart);

        //Assert
        assert.ok(result._id);
    })
})
