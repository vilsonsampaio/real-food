import { useEffect, useState } from "react";
import { Search } from "../Icons/Search";
import { Container, Input } from "./styles";
import { useDebounce } from "../../hooks/useDebounce";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    onSearch(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <Container>
      <Search />
      <Input
        placeholder="O que você quer comer hoje?"
        value={search}
        onChangeText={setSearch}
      />
    </Container>
  );
}
