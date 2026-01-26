const parent = document.querySelector("#parent");

// initial State

const initialCounter = [
  {
    id: 1,
    count: 10,
  },
  {
    id: 2,
    count: 20,
  },
];

// action type
const ADD_COUNTER = "addCounter";
const RESET = "reset";
const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creator
function addCounter() {
  return {
    type: ADD_COUNTER,
  };
}

function increment(id) {
  return {
    type: INCREMENT,
    payload: id,
  };
}

function decrement(id) {
  return {
    type: DECREMENT,
    payload: id,
  };
}
function reset() {
  return {
    type: RESET,
  };
}

document.getElementById("addCounter").addEventListener("click", function () {
  store.dispatch(addCounter());
});
document.getElementById("reset").addEventListener("click", function () {
  store.dispatch(reset());
});

// handler
function handleIncrement(id) {
  store.dispatch(increment(id));
}

function handleDecrement(id) {
  store.dispatch(decrement(id));
}
function handleReset() {
  store.dispatch(reset());
}

// counter reducer
function reducer(state = initialCounter, action) {
  switch (action.type) {
    case ADD_COUNTER: {
      return [
        ...state,
        {
          id: state.length + 1,
          count: 0,
        },
      ];
    }

    case RESET: {
      return state.map((item) => {
        return {
          ...item,
          count: 0,
        };
      });
    }

    case INCREMENT: {
      return state.map((item) => {
        if (item.id !== action.payload) return item;
        return {
          ...item,
          count: item.count + 2,
        };
      });
    }

    case DECREMENT: {
      return state.map((item) => {
        if (item.id !== action.payload) return item;
        return {
          ...item,
          count: item.count <= 0 ? 0 : item.count - 1,
        };
      });
    }

    default:
      return state;
  }
}

// create redux store
const store = Redux.createStore(reducer);
render();
store.subscribe(() => {
  render();
});
//UI render
function render() {
  const currentState = store.getState();

  let allCounter = "";

  currentState.forEach((item) => {
    allCounter += `<div
            class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow mb-2"
          >
            <div class="text-2xl font-semibold">${item.count}</div>
            <div class="flex space-x-3">
              <button class="bg-green-600 text-white px-3 py-2 rounded shadow" onclick="handleIncrement(${item.id})">
                Increment
              </button>
              <button class="bg-red-400 text-white px-3 py-2 rounded shadow" onclick="handleDecrement(${item.id})">
                Decrement
              </button>
            </div>
          </div>`;
  });

  parent.innerHTML = allCounter;
}
