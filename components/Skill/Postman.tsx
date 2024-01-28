import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;
}

function Postman({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYUAAACBCAMAAAAYG1bYAAAAkFBMVEX/bDb////8////ajP/Zyz/bDf/aTH/ZCb/ZSn/aC7/YSP/XRb9oob/8Ov//v//xLH+49n+x7f/q5H93tT/l3r+r5n+9PD/+fb+uKT+0sX9ckD91sf9lHL+6+X9mXj+e07+VQD9y7v+jWv+i2T8n4H/eUj9hVr7gVX9spz+eEv8vKr9l3T9jGX8p4r5x7b0q5c8jGJ5AAAF3UlEQVR4nO3cC3OiOhgGYHKBhKAFZQFB8a4oW3v+/787SbDWqtiZMwfdWd9npl2t6Ni8zZcLuI4DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/COb5hsee/UZeFvOUKla/jK2jhPfs9/OKfFEc8pQQSsxXVoZLX6BHPJYvJmNqAvhC03CmkMPDuEwtI3LpTX8tCvnsN/cyeDGmVyEcJRLd4SHEJGvLQNel2MUw/QAqobb6tEm3qEqdU+GdBKys4s9+k387sWsdEqw38kbJFkWpU3JK26tRPwxLG0TKMUR3iM3aewINA6GKvr0ZY2joUHC9TDgplevtx9IeQYcYGjojh3cGhVqw2ditdk3HcFGTOsK89M64PJI8YnzYpEBC9ex3+7eSSXsGWVYG3u+BDOLjD2boDN0I+i0RUFoXRRYGwaQ+BTXCAN0Jb9k2KpSV2uSbpBztvnLqI4VOyLBl52Ls81nuyj053+umVbN0Y1xKflrF+dz/rFT6gWZZ4UmD+/Z2c6TnnQ76fKY9lvmd/5Z/Or+8XY5C5e8/HL6/mMXWtjOwWZIkw3fp2jveJJk2syeX7w+79V63tve+S4y1vs0mS93OrreaHGOoDp95HDZMv1jv1WNg+9sFaRR4sw9PbuN/vv88trMkv0fLfkpy8zfNipL0SWo7iTzQrCS0YA7fpeUbKfs5dx0V0b1ubJdEwsYmxvQzDzJWDh/S4Fm//h/CW94M4aB0CExMY3kxdqfCPIv3aCDFlK51DCJPC1FkkTKBZKES7m99hOvzIOzPpclJxSRXjhiQ2KbAWPY2aLoUI/Td40Py6inww60QesqrPvwgyeeXe61ZYUoP7xGdRpAO9HelW94RI2JSqOi77zrH+iLDfrO8UHFKZv6MZE0K/oTsUtsXdAokCpCCI+obIaylVw2YCOtgffkQnZ2l0NcpuCrT01e5I8p13CKL2emyDfGVQliO53l/0VQktYg88m6O0inUZKKQgq4TVw09HgbVgItxEmyvB42laT6dQiDUxlakUwqOHRfIx7ap/t9SWNIpnRxT4Nku6IemsukUpnEUIIUbKRzmdV3LIp4G1fVJUPrL1Bs9LiwWuZ7MOt9TcGQVZnRkx47zijSYR7r05DYFPRJVqk5Nw+sU1hWdHJDCVQpxHWXpcB+t1OzGQoKujn1hNBqtbWt/S8FhQgxocz7orC8M1IoujynIMJ0Hld0L0Sn0gnHZe/kU5K1xoXyPMlfd6AnkuJNkKpKUdhT+HBeoMtXGrA6CLLGrsvO+IPwtF8cUynSR59TshZgUREXHLz9T5Yfr0l/m9XowqG4uJM7nSA2Vfihz3tq0uFtJxoI0sfmc9wXhMEfZFNiMDuqwjkrRpMBVTl6+L3irq4aOpZJ83nJxUmob9jwFGdIlW5oVgV4k04PLRs086iIF55gCH1FPSjUlFWtSYHukwIrLdh4L3Tx6/n9b3qyd1+RrW8/TgdHY9hEvNNn1mkmSrkhNVCK2MyKxiKVeSMdjc8enU9NhyNrXab18Cg6/2CiKJXP0BKklBJI0re/u3a+XkJvV7HjxntisVgU/PlbsjwdsiuZ+oR9wC5OXy2xqTvMym5c/a6ErxGVPUL3Wy/ToZ4N9azf29UkH5p3dPm20nv97/On191fmbS96gjAdoe3CmAinPLtxfgVGLIVT37tAbIizPN3gX3tFsfB29y4FIBkuwuiK/DzPUw7mi3sZELJDV+gKnzQ1KJ4fPm7uc5+k4udXg/9I2R7wNhgd8jtX6WmTVz8z2SXXsYMBbT5U2C5EV+iSf+M8wrXo5Ve4HZO/f46hX2B+1DHR+yEGWjr4EEnXXLG8PyjEWCk8At/cmx/V+OT5Y3iybTeblBPMjh7FFcX1pQBaOpS++/PT4X/C1H5UXvw/GPHax7bFgzEpqmTcz96MrFysC4HPsj2B6/hKeRut4PoGQy16HmY8+00AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEC3/gVIaFUbsrWKbAAAAABJRU5ErkJggg=='
            className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32
            filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className="text-3xl font-bold text-black opacity-100">90%</p>
            </div>
        </div>
    </div>
  );
}

export default Postman;