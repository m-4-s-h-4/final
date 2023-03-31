import Link from 'next/link';
import './BackBtn.css';

export const BackBtn = () => {
    return (
        <Link href="/all-projects">
            <button className="btn-slice">
                <div className="top"><span>Go Back</span></div>
                <div className="bottom"><span>Go Back</span></div>
            </button>
        </Link>
    );
}
