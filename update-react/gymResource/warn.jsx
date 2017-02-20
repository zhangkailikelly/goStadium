import React from "react";
class Warn extends React.Component {
    constructor(...prop) {
        super(...prop)
    }
    componentDidUpdate() {
        var _this = this;
        if (this.props.msg.trim().length>0) {
            $(this.refs.toast).fadeIn(600, function () {
                    $(_this.refs.toast).fadeOut(600,function(){_this.props.clearMsg()})
                });
        }

    }

    render() {
        return (
            <div className="toast hide" ref="toast">
                <div className="toast-alert">
                    <div className="toast-msg">{this.props.msg}</div>
                </div>
            </div>
        )
    }
}
export default Warn;