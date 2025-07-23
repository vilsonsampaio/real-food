import { useState } from "react";
import { navItems } from "../../mocks/navItems";
import { Text } from "../Text";
import { Container, Content, Icon, NavItem } from "./styles";

export function BottomNav() {
  const [selectedNavItem, setSelectedNavItem] = useState(navItems[0].route);

  function handleSelectNavItem(navItemRoute: string) {
    setSelectedNavItem(navItemRoute);
  }

  return (
    <Container>
      <Content>
        {navItems.map((item) => {
          const isSelected = item.route === selectedNavItem;

          return (
            <NavItem
              key={item.route}
              isSelected={isSelected}
              onPress={() => handleSelectNavItem(item.route)}
            >
              <Icon>
                {<item.icon fill={isSelected ? "#32B768" : undefined} />}
              </Icon>

              <Text
                size={12}
                weight={500}
                color={isSelected ? "#32B768" : "#52665A"}
              >
                {item.label}
              </Text>
            </NavItem>
          );
        })}
      </Content>
    </Container>
  );
}
