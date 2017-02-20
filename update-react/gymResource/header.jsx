import React from "react";
class Header extends React.Component{
    constructor(...props){
        super(...props)
    }
    render(){
        return ( <header data-am-widget="header" className="am-header am-header-default am-no-layout" style={{backgroundColor:this.props.bgcolor}}>
                <div className="am-header-left am-header-nav">
                    <a href="javascript:history.back();">
                        <i className="am-header-icon am-icon-chevron-left"></i>
                    </a>
                </div>
                <h1 className="am-header-title" style={{fontSize:"1.8rem"}}>{this.props.h1}</h1>
            </header>
        )
    }
}
export default Header;
