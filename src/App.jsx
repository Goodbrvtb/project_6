import { useState, useCallback } from "react";
import "./App.scss";
import SearchInput from "./components/searchInput";
import ItemList from "./components/itemList";
import CounterButton from "./components/counterButton";
import Toggle from "./components/toggle";
import { ThemeContext, themes } from "./contexts/themeContext";
const USERARRAY = [
  { id: 1, fullName: "Иван Иванов Иванович" },
  { id: 2, fullName: "Сергей Петров Петрович" },
  { id: 3, fullName: "Алексей Сидоров Сидорович" },
  { id: 4, fullName: "Дмитрий Смирнов Дмитриевич" },
  { id: 5, fullName: "Андрей Кузнецов Андреевич" },
  { id: 6, fullName: "Максим Попов Максимович" },
  { id: 7, fullName: "Николай Лебедев Николаевич" },
  { id: 8, fullName: "Павел Морозов Павлович" },
  { id: 9, fullName: "Виктор Волков Викторович" },
  { id: 10, fullName: "Егор Зайцев Егорович" },
  { id: 11, fullName: "Иван Иванов Иванович" },
  { id: 12, fullName: "Сергей Петров Петрович" },
  { id: 13, fullName: "Алексей Сидоров Сидорович" },
  { id: 14, fullName: "Дмитрий Смирнов Дмитриевич" },
  { id: 15, fullName: "Андрей Кузнецов Андреевич" },
  { id: 16, fullName: "Максим Попов Максимович" },
  { id: 17, fullName: "Николай Лебедев Николаевич" },
  { id: 18, fullName: "Павел Морозов Павлович" },
  { id: 19, fullName: "Виктор Волков Викторович" },
  { id: 20, fullName: "Егор Зайцев Егорович" },
  { id: 21, fullName: "Иван Иванов Иванович" },
  { id: 22, fullName: "Сергей Петров Петрович" },
  { id: 23, fullName: "Алексей Сидоров Сидорович" },
  { id: 24, fullName: "Дмитрий Смирнов Дмитриевич" },
  { id: 25, fullName: "Андрей Кузнецов Андреевич" },
  { id: 26, fullName: "Максим Попов Максимович" },
  { id: 27, fullName: "Николай Лебедев Николаевич" },
  { id: 28, fullName: "Павел Морозов Павлович" },
  { id: 29, fullName: "Виктор Волков Викторович" },
  { id: 30, fullName: "Егор Зайцев Егорович" },
  { id: 31, fullName: "Иван Иванов Иванович" },
  { id: 32, fullName: "Сергей Петров Петрович" },
  { id: 33, fullName: "Алексей Сидоров Сидорович" },
  { id: 34, fullName: "Дмитрий Смирнов Дмитриевич" },
  { id: 35, fullName: "Андрей Кузнецов Андреевич" },
  { id: 36, fullName: "Максим Попов Максимович" },
  { id: 37, fullName: "Николай Лебедев Николаевич" },
  { id: 38, fullName: "Павел Морозов Павлович" },
  { id: 39, fullName: "Виктор Волков Викторович" },
  { id: 40, fullName: "Егор Зайцев Егорович" },
  { id: 41, fullName: "Иван Иванов Иванович" },
  { id: 42, fullName: "Сергей Петров Петрович" },
  { id: 43, fullName: "Алексей Сидоров Сидорович" },
  { id: 44, fullName: "Дмитрий Смирнов Дмитриевич" },
  { id: 45, fullName: "Андрей Кузнецов Андреевич" },
  { id: 46, fullName: "Максим Попов Максимович" },
  { id: 47, fullName: "Николай Лебедев Николаевич" },
  { id: 48, fullName: "Павел Морозов Павлович" },
  { id: 49, fullName: "Виктор Волков Викторович" },
  { id: 50, fullName: "Егор Зайцев Егорович" },
  { id: 51, fullName: "Иван Иванов Иванович" },
  { id: 52, fullName: "Сергей Петров Петрович" },
  { id: 53, fullName: "Алексей Сидоров Сидорович" },
  { id: 54, fullName: "Дмитрий Смирнов Дмитриевич" },
  { id: 55, fullName: "Андрей Кузнецов Андреевич" },
  { id: 56, fullName: "Максим Попов Максимович" },
  { id: 57, fullName: "Николай Лебедев Николаевич" },
  { id: 58, fullName: "Павел Морозов Павлович" },
  { id: 59, fullName: "Виктор Волков Викторович" },
  { id: 60, fullName: "Егор Зайцев Егорович" },
  { id: 61, fullName: "Иван Иванов Иванович" },
  { id: 62, fullName: "Сергей Петров Петрович" },
  { id: 63, fullName: "Алексей Сидоров Сидорович" },
  { id: 64, fullName: "Дмитрий Смирнов Дмитриевич" },
  { id: 65, fullName: "Андрей Кузнецов Андреевич" },
  { id: 66, fullName: "Максим Попов Максимович" },
  { id: 67, fullName: "Николай Лебедев Николаевич" },
  { id: 68, fullName: "Павел Морозов Павлович" },
  { id: 69, fullName: "Виктор Волков Викторович" },
  { id: 70, fullName: "Егор Зайцев Егорович" },
  { id: 71, fullName: "Иван Иванов Иванович" },
  { id: 72, fullName: "Сергей Петров Петрович" },
  { id: 73, fullName: "Алексей Сидоров Сидорович" },
  { id: 74, fullName: "Дмитрий Смирнов Дмитриевич" },
  { id: 75, fullName: "Андрей Кузнецов Андреевич" },
  { id: 76, fullName: "Максим Попов Максимович" },
  { id: 77, fullName: "Николай Лебедев Николаевич" },
  { id: 78, fullName: "Павел Морозов Павлович" },
  { id: 79, fullName: "Виктор Волков Викторович" },
  { id: 80, fullName: "Егор Зайцев Егорович" },
  { id: 81, fullName: "Иван Иванов Иванович" },
  { id: 82, fullName: "Сергей Петров Петрович" },
  { id: 83, fullName: "Алексей Сидоров Сидорович" },
  { id: 84, fullName: "Дмитрий Смирнов Дмитриевич" },
  { id: 85, fullName: "Андрей Кузнецов Андреевич" },
  { id: 86, fullName: "Максим Попов Максимович" },
  { id: 87, fullName: "Николай Лебедев Николаевич" },
  { id: 88, fullName: "Павел Морозов Павлович" },
  { id: 89, fullName: "Виктор Волков Викторович" },
  { id: 90, fullName: "Егор Зайцев Егорович" },
  { id: 91, fullName: "Иван Иванов Иванович" },
  { id: 92, fullName: "Сергей Петров Петрович" },
  { id: 93, fullName: "Алексей Сидоров Сидорович" },
  { id: 94, fullName: "Дмитрий Смирнов Дмитриевич" },
  { id: 95, fullName: "Андрей Кузнецов Андреевич" },
  { id: 96, fullName: "Максим Попов Максимович" },
  { id: 97, fullName: "Николай Лебедев Николаевич" },
  { id: 98, fullName: "Павел Морозов Павлович" },
  { id: 99, fullName: "Виктор Волков Викторович" },
  { id: 100, fullName: "Егор Зайцев Егорович" },
  { id: 101, fullName: "Иван Иванов Иванович" },
  { id: 102, fullName: "Сергей Петров Петрович" },
  { id: 103, fullName: "Алексей Сидоров Сидорович" },
  { id: 104, fullName: "Дмитрий Смирнов Дмитриевич" },
  { id: 105, fullName: "Андрей Кузнецов Андреевич" },
  { id: 106, fullName: "Максим Попов Максимович" },
  { id: 107, fullName: "Николай Лебедев Николаевич" },
  { id: 108, fullName: "Павел Морозов Павлович" },
  { id: 109, fullName: "Виктор Волков Викторович" },
  { id: 110, fullName: "Егор Зайцев Егорович" },
  { id: 111, fullName: "Иван Иванов Иванович" },
  { id: 112, fullName: "Сергей Петров Петрович" },
  { id: 113, fullName: "Алексей Сидоров Сидорович" },
  { id: 114, fullName: "Дмитрий Смирнов Дмитриевич" },
  { id: 115, fullName: "Андрей Кузнецов Андреевич" },
  { id: 116, fullName: "Максим Попов Максимович" },
  { id: 117, fullName: "Николай Лебедев Николаевич" },
  { id: 118, fullName: "Павел Морозов Павлович" },
  { id: 119, fullName: "Виктор Волков Викторович" },
  { id: 120, fullName: "Егор Зайцев Егорович" },
  { id: 121, fullName: "Иван Иванов Иванович" },
  { id: 122, fullName: "Сергей Петров Петрович" },
  { id: 123, fullName: "Алексей Сидоров Сидорович" },
  { id: 124, fullName: "Дмитрий Смирнов Дмитриевич" },
  { id: 125, fullName: "Андрей Кузнецов Андреевич" },
  { id: 126, fullName: "Максим Попов Максимович" },
  { id: 127, fullName: "Николай Лебедев Николаевич" },
  { id: 128, fullName: "Павел Морозов Павлович" },
  { id: 129, fullName: "Виктор Волков Викторович" },
  { id: 130, fullName: "Егор Зайцев Егорович" },
  { id: 131, fullName: "Иван Иванов Иванович" },
  { id: 132, fullName: "Сергей Петров Петрович" },
  { id: 133, fullName: "Алексей Сидоров Сидорович" },
  { id: 134, fullName: "Дмитрий Смирнов Дмитриевич" },
  { id: 135, fullName: "Андрей Кузнецов Андреевич" },
  { id: 136, fullName: "Максим Попов Максимович" },
  { id: 137, fullName: "Николай Лебедев Николаевич" },
  { id: 138, fullName: "Павел Морозов Павлович" },
  { id: 139, fullName: "Виктор Волков Викторович" },
  { id: 140, fullName: "Егор Зайцев Егорович" },
  { id: 141, fullName: "Иван Иванов Иванович" },
  { id: 142, fullName: "Сергей Петров Петрович" },
  { id: 143, fullName: "Алексей Сидоров Сидорович" },
  { id: 144, fullName: "Дмитрий Смирнов Дмитриевич" },
  { id: 145, fullName: "Андрей Кузнецов Андреевич" },
  { id: 146, fullName: "Максим Попов Максимович" },
  { id: 147, fullName: "Николай Лебедев Николаевич" },
  { id: 148, fullName: "Павел Морозов Павлович" },
  { id: 149, fullName: "Виктор Волков Викторович" },
  { id: 150, fullName: "Егор Зайцев Егорович" },
  { id: 151, fullName: "Иван Иванов Иванович" },
  { id: 152, fullName: "Сергей Петров Петрович" },
  { id: 153, fullName: "Алексей Сидоров Сидорович" },
  { id: 154, fullName: "Дмитрий Смирнов Дмитриевич" },
  { id: 155, fullName: "Андрей Кузнецов Андреевич" },
  { id: 156, fullName: "Максим Попов Максимович" },
  { id: 157, fullName: "Николай Лебедев Николаевич" },
  { id: 158, fullName: "Павел Морозов Павлович" },
  { id: 159, fullName: "Виктор Волков Викторович" },
  { id: 160, fullName: "Егор Зайцев Егорович" },
  { id: 161, fullName: "Иван Иванов Иванович" },
  { id: 162, fullName: "Сергей Петров Петрович" },
  { id: 163, fullName: "Алексей Сидоров Сидорович" },
  { id: 164, fullName: "Дмитрий Смирнов Дмитриевич" },
  { id: 165, fullName: "Андрей Кузнецов Андреевич" },
  { id: 166, fullName: "Максим Попов Максимович" },
  { id: 167, fullName: "Николай Лебедев Николаевич" },
  { id: 168, fullName: "Павел Морозов Павлович" },
  { id: 169, fullName: "Виктор Волков Викторович" },
  { id: 170, fullName: "Егор Зайцев Егорович" },
  { id: 171, fullName: "Иван Иванов Иванович" },
  { id: 172, fullName: "Сергей Петров Петрович" },
  { id: 173, fullName: "Алексей Сидоров Сидорович" },
  { id: 174, fullName: "Дмитрий Смирнов Дмитриевич" },
  { id: 175, fullName: "Андрей Кузнецов Андреевич" },
  { id: 176, fullName: "Максим Попов Максимович" },
  { id: 177, fullName: "Николай Лебедев Николаевич" },
  { id: 178, fullName: "Павел Морозов Павлович" },
  { id: 179, fullName: "Виктор Волков Викторович" },
  { id: 180, fullName: "Егор Зайцев Егорович" },
  { id: 181, fullName: "Иван Иванов Иванович" },
  { id: 182, fullName: "Сергей Петров Петрович" }
];

function App() {
  const [searchText, setSearchText] = useState("");
  const [countApp, setCount] = useState(0);

  const handleCountChange = useCallback((countApp) => {
    setCount(countApp);
  }, []);
  const handleSearchChange = useCallback((searchText) => {
    setSearchText(searchText);
  }, []);
  console.log("render App");
  return (
    <div className="main">
      <div>
        <ThemeContext.Consumer>
          {({ theme, setTheme }) => (
            <Toggle
              onChange={() => {
                if (theme === themes.light) setTheme(themes.dark);
                if (theme === themes.dark) setTheme(themes.light);
              }}
              value={theme === themes.dark}
            />
          )}
        </ThemeContext.Consumer>
        <div className="counter">
          {" "}
          <h1>{countApp}</h1>
          <CounterButton countChange={handleCountChange} count={countApp} />
        </div>
      </div>
      <SearchInput onSearchChange={handleSearchChange} text={searchText} />
      <ItemList userArray={USERARRAY} searchText={searchText} />
    </div>
  );
}

export default App;
