import Header from '~/components/Layout/components/Header'
import SideBar from './Sidebar'
import classNames from "classnames/bind";
import styles from './LayoutDefault.module.scss'
const cx = classNames.bind(styles)
function DefautLayout({ children }) {
    return (
        <div className='wrapper'>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>

        </div>
    )
}
export default DefautLayout