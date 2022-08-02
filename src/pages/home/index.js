
import './index.less';
import { Button } from 'antd';
import bj1 from '../../img/bj1.png'
import user from '../../img/user2.png'
import clock2 from '../../img/clock2.png'
import ad from '../../img/address.png'
import sy from '../../img/sy.png'
import jx2 from '../../img/jx2.png'
import ls2 from '../../img/ls2.png'
function Home(props) {



    return (
        <div className="home">
            <div className='box'>
                <div className='top'>

                    <div className='tit'>
                        <div className='id'>
                            请登录
                        </div>

                        <div className='tx'>
                            <img src={user} className='tximg'></img>
                        </div>


                    </div>

                    <div className='bj2'>


                    </div>


                </div>

                <div className='order'>
                    <div className='ts'>
                        <img src={clock2} className='clock' />
                        待办工单
                    </div>
                    <div className='list'>
                        <div className='xx'>
                            <div className='jh'>LKD123456</div>
                            <div className='rq'>2020.08.09  12:23:14</div>
                        </div>

                        <div className='dz'>
                            <img src={ad} />
                            上海市宝山区大众东朔空间
                        </div>

                    </div>
                    <div className='list'>
                        <div className='xx'>
                            <div className='jh'>LKD123456</div>
                            <div className='rq'>2020.08.09  12:23:14</div>
                        </div>

                        <div className='dz'>
                            <img src={ad} />
                            上海市宝山区大众东朔空间
                        </div>

                    </div>
                    <div className='list'>
                        <div className='xx'>
                            <div className='jh'>LKD123456</div>
                            <div className='rq'>2020.08.09  12:23:14</div>
                        </div>

                        <div className='dz'>
                            <img src={ad} />
                            上海市宝山区大众东朔空间
                        </div>

                    </div>
                    <div className='list'>
                        <div className='xx'>
                            <div className='jh'>LKD123456</div>
                            <div className='rq'>2020.08.09  12:23:14</div>
                        </div>

                        <div className='dz'>
                            <img src={ad} />
                            上海市宝山区大众东朔空间
                        </div>

                    </div>
                    <div className='list'>
                        <div className='xx'>
                            <div className='jh'>LKD123456</div>
                            <div className='rq'>2020.08.09  12:23:14</div>
                        </div>

                        <div className='dz'>
                            <img src={ad} />
                            上海市宝山区大众东朔空间
                        </div>

                    </div>
                    <div className='list'>
                        <div className='xx'>
                            <div className='jh'>LKD123456</div>
                            <div className='rq'>2020.08.09  12:23:14</div>
                        </div>

                        <div className='dz'>
                            <img src={ad} />
                            上海市宝山区大众东朔空间
                        </div>

                    </div>
                    <div className='list'>
                        <div className='xx'>
                            <div className='jh'>LKD123456</div>
                            <div className='rq'>2020.08.09  12:23:14</div>
                        </div>

                        <div className='dz'>
                            <img src={ad} />
                            上海市宝山区大众东朔空间
                        </div>

                    </div>
                    <div className='list'>
                        <div className='xx'>
                            <div className='jh'>LKD123456</div>
                            <div className='rq'>2020.08.09  12:23:14</div>
                        </div>

                        <div className='dz'>
                            <img src={ad} />
                            上海市宝山区大众东朔空间
                        </div>

                    </div>
                </div>
                <div className='dh'>
                    <div className='tb'>
                        <img src={sy} />
                    </div>
                    <div className='tb'>
                        <img src={jx2} />
                    </div>
                    <div className='tb'>
                        <img src={ls2} />
                    </div>
                </div>



            </div>
        </div>
    );
}

export default Home;