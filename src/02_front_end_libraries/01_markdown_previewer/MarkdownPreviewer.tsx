import React from "react";
import marked from "marked";
import { initializeTestRunner } from "../../utils/scripts/injectFCCTests";
import { INITIAL_MARKDOWN } from "./NotTheMarkdownPreviewer";
import "./styles.scss";

interface IStateMarkdownPreviewer {
  editor: string;
}

class MarkdownPreviewer extends React.Component<null, IStateMarkdownPreviewer> {
  constructor(props: any) {
    super(props);
    this.state = { editor: INITIAL_MARKDOWN };
    marked.setOptions({ breaks: true });
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    initializeTestRunner("markdown-previewer", "run");
  }

  handleChange({ target: { value } }: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ editor: value });
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center">Markdown Previewer</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <h2 className="text-center">Editor</h2>
              <textarea
                name="editor"
                id="editor"
                className="form-control"
                value={this.state.editor}
                onChange={this.handleChange}
              ></textarea>
            </div>
            <div className="col-md-6">
              <h2 className="text-center">Preview</h2>
              <p
                id="preview"
                dangerouslySetInnerHTML={{ __html: marked(this.state.editor) }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { MarkdownPreviewer };
