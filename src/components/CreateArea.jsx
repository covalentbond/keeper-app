import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Fab } from "@material-ui/core";
import { Zoom } from "@material-ui/core";

class CreateArea extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.myRef = React.createRef();
  state = {
    title: "",
    content: "",
    isExpanded: false
  };
  // }

  expand = () => {
    this.setState({ isExpanded: true });
    // this.myRef.current.focus();
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  };

  submitNote = (event) => {
    event.preventDefault();
    this.props.onAdd(this.state);
    this.setState((prevNote) => {
      return {
        ...prevNote,
        title: "",
        content: ""
        // isExpanded: true
      };
    });
  };

  render() {
    return (
      <div>
        <form className="create-note">
          <input //TODO: Make the focus back to Title
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
            placeholder="Title"
            onClick={this.expand}
            autoComplete="off"
            required
          />
          {this.state.isExpanded && (
            <textarea
              name="content"
              onChange={this.handleChange}
              value={this.state.content}
              placeholder="Take a note..."
              autoComplete="off"
              rows={3}
              required
            />
          )}
          <Zoom in={this.state.isExpanded}>
            <Fab onSubmit={this.submitNote} onClick={this.submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        </form>
      </div>
    );
  }
}

export default CreateArea;
// import React, { useState } from "react";
// import AddIcon from "@material-ui/icons/Add";
// import { Fab } from "@material-ui/core";
// import { Zoom } from "@material-ui/core";

// function CreateArea(props) {
//   const [note, setNote] = useState({
//     title: "",
//     content: ""
//   });

//   const [isExpanded, setIsExpanded] = useState(false);

//   function expand() {
//     setIsExpanded(true);
//   }

//   function handleChange(event) {
//     const { name, value } = event.target;

//     setNote((prevNote) => {
//       return {
//         ...prevNote,
//         [name]: value
//       };
//     });
//   }

//   function submitNote(event) {
//     props.onAdd(note);
//     setNote({
//       title: "",
//       content: ""
//     });
//     event.preventDefault();
//   }

//   return (
//     <div>
//       <form className="create-note">
//         {isExpanded && (
//           <input
//             name="title"
//             onChange={handleChange}
//             value={note.title}
//             placeholder="Title"
//             autoComplete="off"
//           />
//         )}

//         <textarea //TODO: Make the focus back to Title
//           name="content"
//           onChange={handleChange}
//           value={note.content}
//           placeholder="Take a note..."
//           onClick={expand}
//           // onFocus
//           rows={isExpanded ? 3 : 1}
//           autoComplete="off"
//         />
//         <Zoom in={isExpanded}>
//           <Fab onClick={submitNote}>
//             <AddIcon />
//           </Fab>
//         </Zoom>
//       </form>
//     </div>
//   );
// }

// export default CreateArea;
