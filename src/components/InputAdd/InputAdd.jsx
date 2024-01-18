import { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { addTodos } from "../../features/todoSlice";
import PropTypes from "prop-types";

class InputAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  addTask = () => {
    const { input } = this.state;
    if (input.trim() !== "") {
      this.props.addTodos({ id: nanoid(), task: input });
      this.setState({ input: "" });
    }
  };

  handleKeyPress = (e) => {
    const { input } = this.state;
    if (e.key === "Enter" && input.trim() !== "") {
      this.addTask();
    }
  };

  componentDidMount() {
    window.addEventListener("keypress", this.handleKeyPress);
  }

  componentWillUnMount() {
    window.removeEventListener("keypress", this.handleKeyPress);
  }

  render() {
    const { input } = this.state;

    return (
      <div className="mb-4 flex flex-col sm:flex-row items-center sm:justify-center gap-x-4">
        <input
          type="text"
          className="w-full sm:w-3/4 p-2 text-sm outline-none border-[1px] border-[#BDBDBD] rounded mb-2 sm:mb-0 mr-0 sm:mr-2"
          value={input}
          onChange={(e) => this.setState({ input: e.target.value })}
          placeholder="Add a task"
        />
        <button
          className="w-full sm:w-auto px-4 py-2 text-white font-normal text-sm bg-[#2F80ED] rounded sm:transition-transform sm:hover:scale-105"
          onClick={this.addTask}
        >
          Add
        </button>
      </div>
    );
  }
}

InputAdd.propTypes = {
  addTodos: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  addTodos: (payload) => dispatch(addTodos(payload)),
});

const connectedApp = connect(null, mapDispatchToProps)(InputAdd);

export default connectedApp;
