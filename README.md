# State Practice - Day 1 React State Management

This project demonstrates React state management concepts through a football score counter. It follows the [Day 1 TODO list](https://github.com/rmccrear/codex-lv3-may-2025/blob/main/plan-for-the-day-w3.md#day-1-todo) for learning React state with practical examples.

## 🏈 What This Project Does

This is a football score counter that lets you:
- Add points for different football plays (extra point, safety, touchdown, field goal)
- Decrement points 
- Reset the score to zero
- See the score update in real-time

## 📋 Day 1 TODO Checklist

### ✅ Project Setup
- [x] Created project with `npm create vite@latest` called "state-practice"
- [x] Selected React framework with JavaScript
- [x] Installed dependencies with `npm install`
- [x] Initialized git repository
- [x] Started development server with `npm run dev`

### ✅ Basic Counter Implementation
- [x] **Named function callbacks**: All buttons use named functions like `extraPoint()`, `safety()`, `touchdown()`, etc.
- [x] **Count by 2's**: The safety button increments by 2 points
- [x] **Count by 3's**: The field goal button increments by 3 points
- [x] **Count by other amounts**: 
  - Extra point: +1
  - Safety: +2  
  - Field goal: +3
  - Touchdown: +6
- [x] **Decrement functionality**: "Decrement by 3" button reduces score by 3
- [x] **Reset functionality**: "Reset" button sets count back to 0

### ✅ Advanced Features
- [x] **Multiple state variables**: Uses `useState` for count, score, lives, and timeouts
- [x] **Real-time updates**: Score updates immediately when buttons are clicked
- [x] **Clean function names**: All callback functions have descriptive names

## 🚀 How to Run

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** to the URL shown in the terminal (usually `http://localhost:5173`)

## 🎯 Key Learning Concepts Demonstrated

### 1. **useState Hook**
```javascript
const [count, setCount] = useState(0)
```
- Creates a state variable `count` with initial value 0
- `setCount` is the function to update the state

### 2. **Named Function Callbacks**
```javascript
function extraPoint() {
  setCount(count + 1)
}
```
- Each button has its own named function
- Functions use `setCount` to update the state

### 3. **Event Handling**
```javascript
<button onClick={extraPoint}>
  Extra point
</button>
```
- Buttons use `onClick` to call the named functions
- No arrow functions needed - clean and readable

### 4. **State Updates**
- **Increment**: `setCount(count + 1)` adds to current value
- **Decrement**: `setCount(count - 3)` subtracts from current value  
- **Reset**: `setCount(0)` sets to specific value

## 🏈 Football Scoring Reference

| Play | Points | Button Function |
|------|--------|----------------|
| Extra Point | +1 | `extraPoint()` |
| Safety | +2 | `safety()` |
| Field Goal | +3 | `fieldGoal()` |
| Touchdown | +6 | `touchdown()` |
| Penalty | -3 | `decrement3()` |

## 🎓 What You'll Learn

- How to create React state with `useState`
- How to write named callback functions
- How to update state with different values
- How to handle click events
- How state changes trigger re-renders
- The difference between incrementing, decrementing, and resetting

## 🔧 Try These Challenges

1. **Add more football plays**: Try adding a "2-point conversion" (+2) button
2. **Add more decrement options**: Create buttons that subtract different amounts
3. **Add conditional rendering**: Show a message when the score reaches certain milestones
4. **Add multiple counters**: Track different statistics (yards, downs, etc.)

## 📚 Next Steps

This project covers the fundamentals of React state management. Once you're comfortable with these concepts, you can explore:
- Multiple state variables
- State lifting
- useEffect hook
- Custom hooks
- State management libraries

---

*This project follows the Day 1 TODO list for learning React state management. Each button demonstrates a different way to update state, making it perfect for beginners to understand the core concepts.*
