import React from "react";

function page() {
  return (
    <>
      <main id="tt-pageContent">
        <div className="container">
          <div className="tt-wrapper-inner">
            <h1 className="tt-title-border">Create New Topic</h1>
            <form className="form-default form-create-topic">
              <div className="form-group">
                <label for="inputTopicTitle">Topic Title</label>
                <div className="tt-value-wrapper">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="inputTopicTitle"
                    placeholder="Subject of your topic"
                  />
                  <span className="tt-value-input">99</span>
                </div>
                <div className="tt-note">
                  Describe your topic well, while keeping the subject as short
                  as possible.
                </div>
              </div>

              <div className="pt-editor">
                <h6 className="pt-title">Topic Body</h6>
                <div className="pt-row">
                  <div className="col-left">
                    <ul className="pt-edit-btn">
                      <li>
                        <button type="button" className="btn-icon"></button>
                      </li>
                      <li>
                        <button type="button" className="btn-icon"></button>
                      </li>
                      <li>
                        <button type="button" className="btn-icon"></button>
                      </li>
                      <li>
                        <button type="button" className="btn-icon"></button>
                      </li>
                      <li>
                        <button type="button" className="btn-icon"></button>
                      </li>
                      <li>
                        <button type="button" className="btn-icon"></button>
                      </li>
                      <li className="hr"></li>
                      <li>
                        <button type="button" className="btn-icon"></button>
                      </li>
                      <li>
                        <button type="button" className="btn-icon"></button>
                      </li>
                      <li>
                        <button type="button" className="btn-icon"></button>
                      </li>
                      <li>
                        <button type="button" className="btn-icon"></button>
                      </li>
                      <li>
                        <button type="button" className="btn-icon"></button>
                      </li>
                      <li>
                        <button type="button" className="btn-icon"></button>
                      </li>
                      <li>
                        <button type="button" className="btn-icon"></button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Lets get started"
                  ></textarea>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label for="inputTopicTitle">Category</label>
                      <select className="form-control">
                        <option value="Select">Select</option>
                        <option value="Value 01">Value 01</option>
                        <option value="Value 02">Value 02</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="form-group">
                      <label for="inputTopicTags">Tags</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="inputTopicTags"
                        placeholder="Use comma to separate tags"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-auto ml-md-auto">
                    <a href="#" className="btn btn-secondary btn-width-lg">
                      Create Post
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default page;
