import React from "react";

export default function Home() {
  return (
    <>
      <header id="tt-header">
        <div className="container">
          <div className="row tt-row no-gutters">
            <div className="col-auto">
              <a className="toggle-mobile-menu" href="#"></a>

              <div className="tt-desktop-menu">
                <nav>
                  <ul>
                    <li>
                      <a href="./createNew">
                        <span>New</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="tt-search">
                <button
                  className="tt-search-toggle"
                  data-toggle="modal"
                  data-target="#modalAdvancedSearch"
                ></button>

                <form className="search-wrapper">
                  <div className="search-form">
                    <input
                      type="text"
                      className="tt-search__input"
                      placeholder="Search"
                    />
                    <button className="tt-search__btn" type="submit"></button>
                    <button className="tt-search__close"></button>
                  </div>
                  <div className="search-results">
                    <div className="tt-search-scroll">
                      <ul>
                        <li>
                          <a href="#">
                            <h6 className="tt-title">
                              Rdr2 secret easter eggs
                            </h6>
                            <div className="tt-description">
                              Heres what Ive found in Red Dead Redem..
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <h6 className="tt-title">
                              Top 10 easter eggs in Red Dead Rede..
                            </h6>
                            <div className="tt-description">
                              You can find these easter eggs in Red Dea..
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <h6 className="tt-title">
                              Red Dead Redemtion: Arthur Morgan..
                            </h6>
                            <div className="tt-description">
                              Heres what Ive found in Red Dead Redem..
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <h6 className="tt-title">
                              Rdr2 secret easter eggs
                            </h6>
                            <div className="tt-description">
                              Heres what Ive found in Red Dead Redem..
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <h6 className="tt-title">
                              Top 10 easter eggs in Red Dead Rede..
                            </h6>
                            <div className="tt-description">
                              You can find these easter eggs in Red Dea..
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <h6 className="tt-title">
                              Red Dead Redemtion: Arthur Morgan..
                            </h6>
                            <div className="tt-description">
                              Heres what Ive found in Red Dead Redem..
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <button
                      type="button"
                      className="tt-view-all"
                      data-toggle="modal"
                      data-target="#modalAdvancedSearch"
                    >
                      Advanced Search
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-auto ml-auto">
              <div className="tt-account-btn">
                <a href="./login" className="btn btn-primary">
                  Log in
                </a>
                <a href="./signup" className="btn btn-secondary">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main id="tt-pageContent" className="tt-offset-small">
        <div className="container">
          <div className="tt-topic-list">
            <div className="tt-list-header">
              <div className="tt-col-topic">Topic</div>\
              <div className="tt-col-value hide-mobile">Likes</div>
              <div className="tt-col-value hide-mobile">Replies</div>
              <div className="tt-col-value hide-mobile">Views</div>
              <div className="tt-col-value">Activity</div>
            </div>
            <div className="tt-topic-alert tt-alert-default" role="alert">
              <a href="#" target="_blank">
                4 new posts
              </a>
              are added recently, click here to load them.
            </div>
            <div className="tt-item tt-itemselect">
              <div className="tt-col-description">
                <h6 className="tt-title">
                  <a href="#">Halloween Costume Contest 2018</a>
                </h6>
                <div className="row align-items-center no-gutters">
                  <div className="col-11">
                    <ul className="tt-list-badge">
                      <li className="show-mobile">
                        <a href="#">
                          <span className="tt-color01 tt-badge">politics</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="tt-badge">contests</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="tt-badge">authors</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-1 ml-auto show-mobile">
                    <div className="tt-value">1h</div>
                  </div>
                </div>
              </div>
              <div className="tt-col-category">
                <span className="tt-color01 tt-badge">politics</span>
              </div>
              <div className="tt-col-value hide-mobile">985</div>
              <div className="tt-col-value tt-color-select hide-mobile">
                502
              </div>
              <div className="tt-col-value hide-mobile">15.1k</div>
              <div className="tt-col-value hide-mobile">1h</div>
            </div>
            <div className="tt-item tt-itemselect">
              <div className="tt-col-description">
                <h6 className="tt-title">
                  <a href="#">Were removing Envato Credits from Market</a>
                </h6>
                <div className="row align-items-center no-gutters  hide-desktope">
                  <div className="col-11">
                    <ul className="tt-list-badge">
                      <li className="show-mobile">
                        <a href="#">
                          <span className="tt-color02 tt-badge">video</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-1 ml-auto show-mobile">
                    <div className="tt-value">2h</div>
                  </div>
                </div>
              </div>
              <div className="tt-col-category">
                <span className="tt-color02 tt-badge">video</span>
              </div>
              <div className="tt-col-value hide-mobile">584</div>
              <div className="tt-col-value tt-color-select  hide-mobile">
                35
              </div>
              <div className="tt-col-value hide-mobile">1.3k</div>
              <div className="tt-col-value hide-mobile">2h</div>
            </div>
            <div className="tt-item tt-itemselect">
              <div className="tt-col-description">
                <h6 className="tt-title">
                  <a href="#">Web Hosting Packages for ThemeForest WordPress</a>
                </h6>
                <div className="row align-items-center no-gutters">
                  <div className="col-11">
                    <ul className="tt-list-badge">
                      <li className="show-mobile">
                        <a href="#">
                          <span className="tt-color03 tt-badge">exchange</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="tt-badge">themeforest</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="tt-badge">elements</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-1 ml-auto show-mobile">
                    <div className="tt-value">2h</div>
                  </div>
                </div>
              </div>
              <div className="tt-col-category">
                <span className="tt-color03 tt-badge">exchange</span>
              </div>
              <div className="tt-col-value  hide-mobile">401</div>
              <div className="tt-col-value tt-color-select  hide-mobile">
                975
              </div>
              <div className="tt-col-value  hide-mobile">12.6k</div>
              <div className="tt-col-value hide-mobile">2h</div>
            </div>
            <div className="tt-item">
              <div className="tt-col-description">
                <h6 className="tt-title">
                  <a href="#">Review Queue Changes for VideoHive & PhotoDune</a>
                </h6>
                <div className="row align-items-center no-gutters">
                  <div className="col-11">
                    <ul className="tt-list-badge">
                      <li className="show-mobile">
                        <a href="#">
                          <span className="tt-color04 tt-badge">pets</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="tt-badge">videohive</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="tt-badge">photodune</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-1 ml-auto show-mobile">
                    <div className="tt-value">1d</div>
                  </div>
                </div>
              </div>
              <div className="tt-col-category">
                <span className="tt-color04 tt-badge">pets</span>
              </div>
              <div className="tt-col-value  hide-mobile">308</div>
              <div className="tt-col-value tt-color-select  hide-mobile">
                660
              </div>
              <div className="tt-col-value  hide-mobile">8.3k</div>
              <div className="tt-col-value hide-mobile">1d</div>
            </div>
            <div className="tt-item">
              <div className="tt-col-description">
                <h6 className="tt-title">
                  <a href="#">
                    Does Envato act against the authors of Envato markets?
                  </a>
                </h6>
                <div className="row align-items-center no-gutters  hide-desktope">
                  <div className="col-11">
                    <ul className="tt-list-badge">
                      <li className="show-mobile">
                        <a href="#">
                          <span className="tt-color05 tt-badge">music</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-1 ml-auto show-mobile">
                    <div className="tt-value">1d</div>
                  </div>
                </div>
              </div>
              <div className="tt-col-category">
                <span className="tt-color05 tt-badge">music</span>
              </div>
              <div className="tt-col-value hide-mobile">358</div>
              <div className="tt-col-value tt-color-select hide-mobile">68</div>
              <div className="tt-col-value hide-mobile">8.3k</div>
              <div className="tt-col-value hide-mobile">1d</div>
            </div>
            <div className="tt-item">
              <div className="tt-col-description">
                <h6 className="tt-title">
                  <a href="#">We Want to Hear From You! What Would You Like?</a>
                </h6>
                <div className="row align-items-center no-gutters  hide-desktope">
                  <div className="col-11">
                    <ul className="tt-list-badge">
                      <li className="show-mobile">
                        <a href="#">
                          <span className="tt-color06 tt-badge">movies</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-1 ml-auto show-mobile">
                    <div className="tt-value">2d</div>
                  </div>
                </div>
              </div>
              <div className="tt-col-category">
                <span className="tt-color06 tt-badge">movies</span>
              </div>
              <div className="tt-col-value hide-mobile">671</div>
              <div className="tt-col-value tt-color-select  hide-mobile">
                29
              </div>
              <div className="tt-col-value hide-mobile">1.3k</div>
              <div className="tt-col-value hide-mobile">2d</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
