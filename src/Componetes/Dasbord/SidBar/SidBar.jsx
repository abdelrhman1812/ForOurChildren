import React from 'react'
import { Link } from 'react-router-dom'

function SidBar() {
    return <>

        <aside>
            <h3> عبدالرحمن</h3>

            <ul>
                <li>
                    <Link to={'content'} className='sidebarActive'>
                        <i className='fa fa-home fa-fw'></i>
                        <span>الرئيسيه</span>
                    </Link>
                </li>

                <li>
                    <Link>
                        <i className='fa-regular fa-user fa-fw'></i>
                        <span>الملف الشخصي</span>
                    </Link>
                </li>

                <li>
                    <Link to={'userArticel'}>
                        <i className='fa-regular fa-newspaper fa-fw'></i>
                        <span> مقالاتي</span>
                    </Link>
                </li>

                <li>
                    <Link to={'addArtical'}>
                        <i className="fa-regular fa-clipboard fa-fw"></i>
                        <span>اضافة مقال</span>
                    </Link>
                </li>

                <li>
                    <Link>
                        <i className='fa-solid fa-gear fa-fw'></i>
                        <span>الاعدادات</span>
                    </Link>
                </li>

                <li>
                    <Link>
                        <i className='fa-solid fa-long-arrow-alt-right fa-fw'></i>
                        <span>تسجيل الخروج</span>
                    </Link>
                </li>

            </ul>

        </aside>
    </>
}

export default SidBar