import * as React from 'react';
import p01 from '../images/products/img_01.png';

export default function Product() {
    return (
        <div>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={ p01 } alt="画像が入ります" width="500" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            “製品の紹介をしています製品の紹介をしています製品の紹介をしています製品の紹介をしています製品の紹介をしています製品の紹介をしています”
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                            工業製品01
                        </div>
                        <div className="text-slate-700 dark:text-slate-500">
                            水素バーナ用01
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    );
}
