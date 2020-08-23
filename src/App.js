import React, {Component} from 'react';
import './App.css'
import Header from "./Components/Header/Header";
import LeftBar from "./Components/LeftBar/LeftBar";
import {Route, Switch} from "react-router";
import {instanceOf} from 'prop-types';
import {withCookies, Cookies} from 'react-cookie';
import LearningComponent from "./Components/LearningComonent/LearningComponent";
import axios from 'axios';
import RightBar from "./Components/RightBar/RightBar";

class App extends Component {

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);

        const {cookies} = props;
        let currentTheme = cookies.get('THEME');

        this.state = {
            params: {
                isLogin: false,
            },
            theme: '',
            LevelsData: [],
            ChapterData: [],
            isLoaded: false
        };

        this.handleOnLevelClick = () => {
            let name = JSON.stringify({
                chapter_number: '2',
                progress: '12'
            });
            cookies.set('LEVEL_COOKIE', name, {path: '/'});
        };

        this.handleChapter = chapter_number => {
            axios.get('http://37.53.93.223:5037/' + chapter_number)
                .then(res => {
                    this.setState({ChapterData: res.data})
                })
                .catch(err => {
                    console.log(err.data)
                })
        };

        this.onChangeBackground = e => {
            this.setState({theme: e});
        };

        //Add get chapters  logic with axios

        this.componentDidMount = () => {

            axios.get('http://37.53.93.223:5037/levels?logged_in=false')
                .then(res => {
                    const levelsData = res.data;
                    this.setState({LevelsData: levelsData});
                })
                .catch(err => {
                    console.log(err)
                });


            setTimeout(() => {
                this.setState({isLoaded: true});
            }, 200);


            if (typeof currentTheme === 'undefined') {
                this.setState({theme: 'black'})
            } else if (currentTheme === 'white') {
                this.setState({theme: 'white'})
            } else {
                this.setState({theme: 'black'})
            }
        }
    }

    render() {
        return (
            <div style={this.state.theme === 'black' ? {backgroundColor: '#111111'} : null}
                 className="main-container">

                <Header theme={this.state.theme} isLogin={this.state.params.isLogin}/>
                <Switch>
                    <div className={"main"}>
                        <div className={"main-row"}>
                            <LeftBar
                                theme={this.state.theme}
                                onChangeBackground={this.onChangeBackground}
                                isLogin={this.state.params.isLogin}
                            />

                            <Route exact path="/">
                                <LearningComponent
                                    theme={this.state.theme}
                                    onLevelClick={this.handleOnLevelClick}
                                    LevelsData={this.state.LevelsData}
                                    chapterdata={this.state.ChapterData}
                                    handleChapter={this.handleChapter}
                                />
                            </Route>

                            <Route exact path="/fight">

                            </Route>

                            <RightBar
                                theme={this.state.theme}
                                isLogin={this.state.params.isLogin}
                                days={0} level={0} exp={0}
                            />
                        </div>
                    </div>
                </Switch>
                <div style={this.state.theme === 'black' ? {backgroundColor: '#111111'} : {backgroundColor: '#ffffff'}}
                     className={this.state.isLoaded ? 'loader ready' : 'loader'}
                >
                    <img alt={"ur ma fet"} src={"./favicon.svg"}/>
                </div>
            </div>
        );
    }
}

export default withCookies(App);

