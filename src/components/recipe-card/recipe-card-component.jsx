import {
    CardContainer,
    Title,
    Description,
    HeaderImage,
    IngredientsList,
    HeaderDetails,
    Ingredient,
    IngredientSectionHeader,
    HeaderContainer,
    Direction,
    DirectionsContainer,
    NotesContainer,
    Note,
    RecipeContainer,
} from "./recipe-card-styles";

const RecipeCard = () => {

    return (
        <CardContainer>
            <HeaderContainer>
                <HeaderDetails>
                    <Title>Peri Peri Pasta</Title>
                    <Description>A delicious creamy pasta with a bit of a kick. This dish is a family favourite.</Description>
                </HeaderDetails>
                <HeaderImage></HeaderImage>
            </HeaderContainer>
            <RecipeContainer>
                <IngredientsList>
                    <IngredientSectionHeader>Peri Peri Spice Mix:</IngredientSectionHeader>
                    <Ingredient>2 tbsp Chili Flakes</Ingredient>
                    <Ingredient>1 tbsp Oregano</Ingredient>
                    <Ingredient>1 tbsp Salt</Ingredient>
                    <Ingredient>2 tbsp Paprika</Ingredient>
                    <Ingredient>1.5 tbsp Sugar</Ingredient>
                    <Ingredient>1 tbsp Garlic powder</Ingredient>
                    <Ingredient>1 tbsp Onion powder</Ingredient>
                    <IngredientSectionHeader>Tofu:</IngredientSectionHeader>
                    <Ingredient>1 block extra firm tofu</Ingredient>
                    <Ingredient>1 tbsp soy sauce</Ingredient>
                    <Ingredient>2 tbsp peri peri spice mix</Ingredient>
                    <IngredientSectionHeader>Sauce:</IngredientSectionHeader>
                    <Ingredient>2 tbsp butter</Ingredient>
                    <Ingredient>1 cup oat milk</Ingredient>
                    <Ingredient>2 tbsp flour</Ingredient>
                    <Ingredient>1/2 cup parmasean cheese</Ingredient>
                    <Ingredient>1/2 cup nutritional yeast</Ingredient>
                    <Ingredient>1 tsp oregano</Ingredient>
                    <Ingredient>3 tbsp peri peri spice mix</Ingredient>
                    <IngredientSectionHeader>Pasta:</IngredientSectionHeader>
                    <Ingredient>1 lb rigatoni</Ingredient>
                </IngredientsList>
                <DirectionsContainer>
                    <NotesContainer>
                        <h4>Notes:</h4>
                        <Note>We often like to double the sauce</Note>
                    </NotesContainer>
                    <h4>Instructions:</h4>
                    <Direction>1. Add all the peri peri spice into a pestle and mortar. Grind down until it’s a fine powder. Place into an airtight jar and save for later.</Direction>
                    <Direction>2. In a bowl add the tofu with the remaining ingredients. Mix well and allow to marinate for 10 mins.</Direction>
                    <Direction>3. Pop into the air fryer and cook for 15 mins on 360F.</Direction>
                    <Direction>4. In a pan on medium heat add the butter and allow to melt. Add the flour and mix until there are no lumps. Add the milk, mix until it becomes thick.</Direction>
                    <Direction>5. Add the remaining ingredients and mix well. Then add the cooked pasta and mix well.</Direction>
                    <Direction>6. Add the cooked tofu and serve up with some more peri peri spice, fresh herbs. </Direction>
                </DirectionsContainer>
            </RecipeContainer>
        </CardContainer>
    )
}

export default RecipeCard