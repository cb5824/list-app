import { db } from "../../utils/firebase/firebase.utils";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";
import './create-recipe-form-styles.scss'
import { useState } from "react";

const CreateRecipeForm = () => {

    const [ingredientFields, setIngredientFields] = useState([{ ingredient: "", quantity: "" }]);
    const [steps, setSteps] = useState([{ instruction: "" }]);

    const handleAddIngredient = (event) => {
        event.preventDefault();
        setIngredientFields([...ingredientFields, { ingredient: "", quantity: "" }]);
    };

    const handleAddStep = (event) => {
        event.preventDefault();
        setSteps([...steps, { instruction: "" }]);
    };

    const handleDeleteIngredient = (event, index) => {
        event.preventDefault();
        const newArray = [...ingredientFields];
        newArray.splice(index, 1);
        setIngredientFields(newArray);
    };

    const handleDeleteStep = (event, index) => {
        event.preventDefault();
        const newArray = [...steps];
        newArray.splice(index, 1);
        setSteps(newArray);
    };

    const handleIngredientChange = (event, index) => {
        let { name, value } = event.target;
        let onChangeValue = [...ingredientFields];
        onChangeValue[index][name] = value;
        setIngredientFields(onChangeValue);
    };

    const handleStepChange = (event, index) => {
        let { name, value } = event.target;
        let onChangeValue = [...steps];
        onChangeValue[index][name] = value;
        setSteps(onChangeValue);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        var recipeTitle = document.getElementById('recipeTitle');
        var description = document.getElementById('description');
        try {
            const docRef = await addDoc(collection(db, 'recipes'), {
                title: recipeTitle.value,
                description: description.value,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <div>
            {/* <form onSubmit={handleSubmit}>
                <input type="text" id="recipeTitle" placeholder="title" />
                <textarea name="description" id="description" placeholder="description"></textarea>
                <button id="btn" type="submit">ADD</button>

            </form> */}
            <form>

                <div className="segment">
                    <h1>Create a Recipe:</h1>
                </div>

                <div className="headerContainer">
                    <div className="headerDetails">

                        <label>
                            <input type="text" placeholder="Title" id="recipeTitle" />
                        </label>

                        <label>
                            <textarea id="description" placeholder="Description"></textarea>
                        </label>

                    </div>
                    <div className="headerImageSection">
                    </div>

                </div>

                <div className="bodyContainer">
                    <div className="bodyIngredients">
                        <label>
                            {ingredientFields.map((item, index) => (
                                <div className="ingredientContainer" key={index}>
                                    <input
                                        type="text"
                                        placeholder="Ingredient"
                                        name="ingredient"
                                        className="ingredientName"
                                        value={item.ingredient}
                                        onChange={(event) => handleIngredientChange(event, index)}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Quantity"
                                        name="quantity"
                                        className="ingredientQuantity"
                                        value={item.quantity}
                                        onChange={(event) => handleIngredientChange(event, index)}
                                    />
                                    {ingredientFields.length > 1 && (
                                        <button onClick={(event) => handleDeleteIngredient(event, index)}>
                                            <i className="fa-solid fa-circle-minus"></i>
                                        </button>
                                    )}
                                </div>
                            ))}

                            <button onClick={(event) => handleAddIngredient(event)}>
                                <i className="fa-solid fa-circle-plus"></i>
                            </button>
                        </label>
                    </div>
                    <div className="bodySteps">
                        <label>
                            {steps.map((item, index) => (
                                <div key={index}>

                                    <textarea
                                        className="step"
                                        name="instruction"
                                        value={item.instruction}
                                        onChange={(event) => handleStepChange(event, index)}
                                    />
                                </div>

                            ))}
                        </label>
                        <button>
                            <i className="fa-solid fa-circle-plus"></i>
                        </button>

                    </div>
                </div>


                <label>
                    <button className="red" type="button" onClick={handleSubmit}>Save and Continue</button>
                </label>

            </form>
        </div>
    )
}

export default CreateRecipeForm