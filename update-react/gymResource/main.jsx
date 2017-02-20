import React from "react";
class Main extends React.Component{
    constructor(...props){
        super(...props)
    }
    render(){
        return (
            <div className="main">
                <div className="book-container" style={{padding:0}}>
                    <div className="book-area">
                        <ul>
                            <li>1号场</li>
                            <li>2号场</li>
                            <li>3号场</li>
                            <li>4号场</li>
                            <li>5号场</li>
                            <li>6号场</li>
                            <li>7号场</li>
                            <li>8号场</li>
                            <li>9号场</li>
                            <li>10号场</li>
                        </ul>
                    </div>
                    <div className="book-time">
                        <ul>
                            <li style={{marginTop:"20px"}}>8:00</li>
                            <li>9:00</li>
                            <li>10:00</li>
                            <li>11:00</li>
                            <li>12:00</li>
                            <li>13:00</li>
                            <li>14:00</li>
                            <li>15:00</li>
                            <li>16:00</li>
                            <li>17:00</li>
                            <li>18:00</li>
                            <li>19:00</li>
                            <li>20:00</li>
                            <li>21:00</li>
                            <li>22:00</li>
                        </ul>
                    </div>
                    <div id="wrapper">
                        <div className="touchscrollwrapper">
                            <div className="touchscrollelement">
                                <div id="scroller">
                                    <div className="book-list">
                                        <ul>
                                            <li goodsid="11" price="9" course_content="1号场,7,9,7:00-8:00" id=" "
                                                group_ids="11,12" class="available">
                                                ￥<em>9</em>
                                            </li>
                                            <li goodsid="12" price="9" content="8:00-9:00 1号场"
                                                course_content="1号场,8,9,8:00-9:00" id=" " group_ids="12,13" class="available">
                                                ￥<em>9</em>
                                            </li>
                                            <li goodsid="13" price="9" content="9:00-10:00 1号场"
                                                course_content="1号场,9,9,9:00-10:00" id=" " group_ids="13,14" class="available">
                                                ￥<em>9</em>
                                            </li>
                                            <li goodsid="14" price="9" content="10:00-11:00 1号场"
                                                course_content="1号场,10,9,10:00-11:00" id=" " group_ids="14,15"
                                                class="available">
                                                ￥<em>9</em>
                                            </li>
                                            <li goodsid="15" price="9" content="11:00-12:00 1号场"
                                                course_content="1号场,11,9,11:00-12:00" id=" " group_ids="15,16"
                                                class="available">
                                                ￥<em>9</em>
                                            </li>
                                            <li goodsid="16" price="9" content="12:00-13:00 1号场"
                                                course_content="1号场,12,9,12:00-13:00" id=" " group_ids="16,17"
                                                class="available">
                                                ￥<em>9</em>
                                            </li>
                                            <li goodsid="17" price="9" content="13:00-14:00 1号场"
                                                course_content="1号场,13,9,13:00-14:00" id=" " group_ids="17,18"
                                                class="available">
                                                ￥<em>9</em>
                                            </li>
                                            <li goodsid="18" price="9" content="14:00-15:00 1号场"
                                                course_content="1号场,14,9,14:00-15:00" id=" " group_ids="18,19"
                                                class="available">
                                                ￥<em>9</em>
                                            </li>
                                            <li goodsid="19" price="9" content="15:00-16:00 1号场"
                                                course_content="1号场,16,9,15:00-16:00" id=" " group_ids="19,20"
                                                class="available">
                                                ￥<em>9</em>
                                            </li>
                                            <li goodsid="20" price="9" content="16:00-17:00 1号场"
                                                course_content="1号场,17,9,16:00-17:00" id=" " group_ids="20,21"
                                                class="available">
                                                ￥<em>9</em>
                                            </li>
                                            <li goodsid="21" price="9" content="17:00-18:00 1号场"
                                                course_content="1号场,18,9,17:00-18:00" id=" " group_ids="21,22"
                                                class="available">
                                                ￥<em>9</em>
                                            </li>
                                            <li goodsid="22" price="9" content="18:00-19:00 1号场"
                                                course_content="1号场,19,9,18:00-19:00" id=" " group_ids="22,23"
                                                class="available">
                                                ￥<em>9</em>
                                            </li>
                                            <li goodsid="23" price="9" content="19:00-20:00 1号场"
                                                course_content="1号场,20,9,19:00-20:00" id=" " group_ids="23,24"
                                                class="available">
                                                ￥<em>9</em>
                                            </li>
                                            <li goodsid="24" price="9" content="20:00-21:00 1号场"
                                                course_content="1号场,21,9,20:00-21:00" id=" " group_ids="24,25"
                                                class="available">
                                                ￥<em>9</em>
                                            </li>
                                            <li goodsid="25" price="9" content="21:00-22:00 1号场"
                                                course_content="1号场,22,9,21:00-22:00" id=" " group_ids="25,26"
                                                class="available">
                                                ￥<em>9</em>
                                            </li>
                                            <li goodsid="26" price="9" content="22:00-23:00 1号场"
                                                course_content="1号场,23,9,22:00-23:00" id=" " group_ids="26,27"
                                                class="available">
                                                ￥<em>9</em>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li goodsid="27" price="30" content="7:00-8:00 2号场"
                                                course_content="2号场,7,30,7:00-8:00" id=" " group_ids="27,28" class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="28" price="30" content="8:00-9:00 2号场"
                                                course_content="2号场,8,30,8:00-9:00" id=" " group_ids="28,29" class="disable">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="29" price="30" content="9:00-10:00 2号场"
                                                course_content="2号场,9,30,9:00-10:00" id=" " group_ids="29,30" class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="30" price="30" content="10:00-11:00 2号场"
                                                course_content="2号场,10,30,10:00-11:00" id=" " group_ids="30,31" class="disable">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="31" price="30" content="11:00-12:00 2号场"
                                                course_content="2号场,11,30,11:00-12:00" id=" " group_ids="31,32" class="disable">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="32" price="30" content="12:00-13:00 2号场"
                                                course_content="2号场,12,30,12:00-13:00" id=" " group_ids="32,33"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="33" price="30" content="13:00-14:00 2号场"
                                                course_content="2号场,13,30,13:00-14:00" id=" " group_ids="33,34" class="disable">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="34" price="30" content="14:00-15:00 2号场"
                                                course_content="2号场,14,30,14:00-15:00" id=" " group_ids="34,35" class="disable">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="35" price="30" content="15:00-16:00 2号场"
                                                course_content="2号场,15,30,15:00-16:00" id=" " group_ids="35,36"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="36" price="30" content="16:00-17:00 2号场"
                                                course_content="2号场,16,30,16:00-17:00" id=" " group_ids="36,37"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="37" price="30" content="17:00-18:00 2号场"
                                                course_content="2号场,17,30,17:00-18:00" id=" " group_ids="37,38"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="38" price="30" content="18:00-19:00 2号场"
                                                course_content="2号场,18,30,18:00-19:00" id=" " group_ids="38,39"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="39" price="30" content="19:00-20:00 2号场"
                                                course_content="2号场,19,30,19:00-21:00" id=" " group_ids="39,40"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="40" price="30" content="20:00-21:00 2号场"
                                                course_content="2号场,20,30,20:00-21:00" id=" " group_ids="40,41" class="disable">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="41" price="30" content="21:00-22:00 2号场"
                                                course_content="2号场,21,30,21:00-22:00" id=" " group_ids="41,42"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="42" price="30" content="22:00-23:00 2号场"
                                                course_content="2号场,22,30,22:00-23:00" id=" " group_ids="42,43"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li goodsid="43" price="30" content="7:00-8:00 3号场"
                                                course_content="3号场,7,30,7:00-8:00" id=" " group_ids="43,44" class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="44" price="30" content="8:00-9:00 3号场"
                                                course_content="3号场,8,30,8:00-9:00" id=" " group_ids="44,45" class="disable">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="45" price="30" content="9:00-10:00 3号场"
                                                course_content="3号场,9,30,9:00-10:00" id=" " group_ids="45,46" class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="46" price="30" content="10:00-11:00 3号场"
                                                course_content="3号场,10,30,10:00-11:00" id=" " group_ids="46,47" class="disable">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="47" price="30" content="11:00-12:00 3号场"
                                                course_content="3号场,11,30,11:00-12:00" id=" " group_ids="47,48" class="disable">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="48" price="30" content="12:00-13:00 3号场"
                                                course_content="3号场,12,30,12:00-13:00" id=" " group_ids="48,49"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="49" price="30" content="13:00-14:00 3号场"
                                                course_content="3号场,13,30,13:00-14:00" id=" " group_ids="49,50" class="disable">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="50" price="30" content="14:00-15:00 3号场"
                                                course_content="3号场,14,30,14:00-15:00" id=" " group_ids="50,51" class="disable">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="51" price="30" content="15:00-16:00 3号场"
                                                course_content="3号场,15,30,15:00-16:00" id=" " group_ids="51,52"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="52" price="30" content="16:00-17:00 3号场"
                                                course_content="3号场,16,30,16:00-17:00" id=" " group_ids="52,53"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="53" price="30" content="17:00-18:00 3号场"
                                                course_content="3号场,17,30,17:00-18:00" id=" " group_ids="53,54"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="54" price="30" content="18:00-19:00 3号场"
                                                course_content="3号场,18,30,18:00-19:00" id=" " group_ids="54,55"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="55" price="30" content="19:00-20:00 3号场"
                                                course_content="3号场,19,30,19:00-21:00" id=" " group_ids="55,56"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="56" price="30" content="20:00-21:00 3号场"
                                                course_content="3号场,20,30,20:00-21:00" id=" " group_ids="56,57" class="disable">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="57" price="30" content="21:00-22:00 3号场"
                                                course_content="3号场,21,30,21:00-22:00" id=" " group_ids="57,58"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="58" price="30" content="22:00-23:00 3号场"
                                                course_content="3号场,22,30,22:00-23:00" id=" " group_ids="58,59"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li goodsid="59" price="30" content="7:00-8:00 4号场"
                                                course_content="4号场,7,30,7:00-8:00" id=" " group_ids="59,60" class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="60" price="30" content="8:00-9:00 4号场"
                                                course_content="4号场,8,30,8:00-9:00" id=" " group_ids="60,61" class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="61" price="30" content="9:00-10:00 4号场"
                                                course_content="4号场,9,30,9:00-10:00" id=" " group_ids="61,62" class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="62" price="30" content="10:00-11:00 4号场"
                                                course_content="4号场,10,30,10:00-11:00" id=" " group_ids="62,63"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="63" price="30" content="11:00-12:00 4号场"
                                                course_content="4号场,11,30,11:00-12:00" id=" " group_ids="63,64"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="64" price="30" content="12:00-13:00 4号场"
                                                course_content="4号场,12,30,12:00-13:00" id=" " group_ids="64,65"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="65" price="30" content="13:00-14:00 4号场"
                                                course_content="4号场,13,30,13:00-14:00" id=" " group_ids="65,66"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="66" price="30" content="14:00-15:00 4号场"
                                                course_content="4号场,14,30,14:00-15:00" id=" " group_ids="66,67"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="67" price="30" content="15:00-16:00 4号场"
                                                course_content="4号场,15,30,15:00-16:00" id=" " group_ids="67,68"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="68" price="30" content="16:00-17:00 4号场"
                                                course_content="4号场,16,30,16:00-17:00" id=" " group_ids="68,69"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="69" price="30" content="17:00-18:00 4号场"
                                                course_content="4号场,17,30,17:00-18:00" id=" " group_ids="69,70"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="70" price="30" content="18:00-19:00 4号场"
                                                course_content="4号场,18,30,18:00-19:00" id=" " group_ids="70,71"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="71" price="30" content="19:00-20:00 4号场"
                                                course_content="4号场,19,30,19:00-21:00" id=" " group_ids="71,72"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="72" price="30" content="20:00-21:00 4号场"
                                                course_content="4号场,20,30,20:00-21:00" id=" " group_ids="72,73"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="73" price="30" content="21:00-22:00 4号场"
                                                course_content="4号场,21,30,21:00-22:00" id=" " group_ids="73,74"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="74" price="30" content="22:00-23:00 4号场"
                                                course_content="4号场,22,30,22:00-23:00" id=" " group_ids="74,75"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li goodsid="75" price="30" content="7:00-8:00 5号场"
                                                course_content="5号场,7,30,7:00-8:00" id=" " group_ids="75,76" class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="76" price="30" content="8:00-9:00 5号场"
                                                course_content="5号场,8,30,8:00-9:00" id=" " group_ids="76,77" class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="77" price="30" content="9:00-10:00 5号场"
                                                course_content="5号场,9,30,9:00-10:00" id=" " group_ids="77,78" class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="78" price="30" content="10:00-11:00 5号场"
                                                course_content="5号场,10,30,10:00-11:00" id=" " group_ids="78,79"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="79" price="30" content="11:00-12:00 5号场"
                                                course_content="5号场,11,30,11:00-12:00" id=" " group_ids="79,80"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="80" price="30" content="12:00-13:00 5号场"
                                                course_content="5号场,12,30,12:00-13:00" id=" " group_ids="80,81"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="81" price="30" content="13:00-14:00 5号场"
                                                course_content="5号场,13,30,13:00-14:00" id=" " group_ids="81,82"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="82" price="30" content="14:00-15:00 5号场"
                                                course_content="5号场,14,30,14:00-15:00" id=" " group_ids="82,83"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="67" price="30" content="15:00-16:00 5号场"
                                                course_content="5号场,15,30,15:00-16:00" id=" " group_ids="67,68"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="83" price="30" content="16:00-17:00 5号场"
                                                course_content="5号场,16,30,16:00-17:00" id=" " group_ids="83,84"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="53" price="30" content="17:00-18:00 5号场"
                                                course_content="5号场,17,30,17:00-18:00" id=" " group_ids="53,54"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="84" price="30" content="18:00-19:00 5号场"
                                                course_content="5号场,18,30,18:00-19:00" id=" " group_ids="84,85"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="85" price="30" content="19:00-20:00 5号场"
                                                course_content="5号场,19,30,19:00-21:00" id=" " group_ids="85,86"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="86" price="30" content="20:00-21:00 5号场"
                                                course_content="5号场,20,30,20:00-21:00" id=" " group_ids="86,87"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="87" price="30" content="21:00-22:00 5号场"
                                                course_content="5号场,21,30,21:00-22:00" id=" " group_ids="87,88"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="88" price="30" content="22:00-23:00 5号场"
                                                course_content="5号场,22,30,22:00-23:00" id=" " group_ids="88,89"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li goodsid="89" price="30" content="7:00-8:00 6号场"
                                                course_content="6号场,7,30,7:00-8:00" id=" " group_ids="89,90" class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="90" price="30" content="8:00-9:00 6号场"
                                                course_content="6号场,8,30,8:00-9:00" id=" " group_ids="90,91" class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="91" price="30" content="9:00-10:00 6号场"
                                                course_content="6号场,9,30,9:00-10:00" id=" " group_ids="91,92" class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="92" price="30" content="10:00-11:00 6号场"
                                                course_content="6号场,10,30,10:00-11:00" id=" " group_ids="92,93"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="93" price="30" content="11:00-12:00 6号场"
                                                course_content="6号场,11,30,11:00-12:00" id=" " group_ids="93,94"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="94" price="30" content="12:00-13:00 6号场"
                                                course_content="6号场,12,30,12:00-13:00" id=" " group_ids="94,95"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="95" price="30" content="13:00-14:00 6号场"
                                                course_content="6号场,13,30,13:00-14:00" id=" " group_ids="95,96"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="96" price="30" content="14:00-15:00 6号场"
                                                course_content="6号场,14,30,14:00-15:00" id=" " group_ids="96,97"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="97" price="30" content="15:00-16:00 6号场"
                                                course_content="6号场,15,30,15:00-16:00" id=" " group_ids="97,98"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="98" price="30" content="16:00-17:00 6号场"
                                                course_content="6号场,16,30,16:00-17:00" id=" " group_ids="98,99"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="99" price="30" content="17:00-18:00 6号场"
                                                course_content="6号场,17,30,17:00-18:00" id=" " group_ids="99,100"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="101" price="30" content="18:00-19:00 6号场"
                                                course_content="6号场,18,30,18:00-19:00" id=" " group_ids="101,102"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="102" price="30" content="19:00-20:00 6号场"
                                                course_content="6号场,19,30,19:00-21:00" id=" " group_ids="102,103"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="103" price="30" content="20:00-21:00 6号场"
                                                course_content="6号场,20,30,20:00-21:00" id=" " group_ids="103,104"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="104" price="30" content="21:00-22:00 6号场"
                                                course_content="6号场,21,30,21:00-22:00" id=" " group_ids="104,105"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                            <li goodsid="105" price="30" content="22:00-23:00 6号场"
                                                course_content="6号场,22,30,22:00-23:00" id=" " group_ids="105,106"
                                                class="available">
                                                ￥<em>30</em>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Main;