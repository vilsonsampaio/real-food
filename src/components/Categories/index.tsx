import { FlatList } from "react-native";
import { categories, Category as CategoryType } from "../../mocks/categories";
import { Text } from "../Text";
import { Category, Container, Icon } from "./styles";
import { useState } from "react";

interface CategoriesProps {
  onChangeCategory: (index: CategoryType) => void;
}

export function Categories({ onChangeCategory }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]._id);

  function handleSelectCategory(categoryId: string) {
    setSelectedCategory((selectedCategoryId) =>
      selectedCategoryId === categoryId ? "" : categoryId
    );
    onChangeCategory(categories.filter(({ _id }) => _id === categoryId)[0]);
  }

  return (
    <Container>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(category) => category._id}
        contentContainerStyle={{ paddingLeft: 16, paddingRight: 24 }}
        renderItem={({ item: category }) => {
          const isSelected = category._id === selectedCategory;

          return (
            <Category
              isSelected={isSelected}
              onPress={() => handleSelectCategory(category._id)}
            >
              <Icon>{category.icon}</Icon>
              <Text
                weight={500}
                size={11}
                color={isSelected ? "#fff" : undefined}
              >
                {category.name}
              </Text>
            </Category>
          );
        }}
      />
    </Container>
  );
}
