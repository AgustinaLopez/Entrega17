import mongoose from "mongoose";
import productsDao from "../../src/service/dao/models/products.model";
import  Assert  from "assert";

mongoose.connect(`mongodb+srv://disagustinalopez:RtPszX4bFwr4t0VB@cluster0.mfqjqym.mongodb.net/ecommerce?retryWrites=true&w=majority`) //Coneccion a la BD dentro de los parentesis

const assert = Assert.strict;

//Contexto
describe('Testing Products Dao', ()=>{
    
    before(function() {
        this.productsDao = new productsDao()
    });
    
    beforeEach(function(){
        this.timeout(5000);
    });
    
    //Test 1
    it('Que se muestre como Array', async function (){
        //Given
        console.log(this.productsDao);
        const isArray = true;

        //Then
        const result = await this.productsDao.get();
        console.log(`El resultado es un Array: ${Array.isArray(result)}`);
        
        //Assert
        assert.strictEqual(Array.isArray(result), isArray);
    })

    //Test 2
    it('Creador de Producto', async function (){
        //Given
        let mockProduct = {
            tittle: "prueba",
            author: "prueba 1",
            description: "cualquier descrip",
        }

        //Then
        const result = await this.userDao.save(mockProduct);

        //Assert
        assert.ok(result._id);
    })
})
