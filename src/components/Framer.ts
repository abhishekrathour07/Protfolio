


export const fadeInDown = () => {
    return {
        hidden: {
            opacity: 0,
            y: -80
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                duration: 1,
            },
        }
    }
}
export const fadeInup = () => {
    return {
        hidden: {
            opacity: 0,
            y: 100
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                duration: 1.1,
            },

        }
    }

}
export const fadeInleft = () => {
    return {
        hidden: {
            opacity: 0,
            x: -140
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                duration: 1.1,
            },

        }
    }
}
export const fadeInRight = () => {
    return {
        hidden: {
            opacity: 0,
            x: 140
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                duration: 1.1,
            },

        }
    }

}
// export const popupAnimation = () => {
//     return {
//         hidden: { opacity: 0, y: -60 ,x:110},
//         show: { opacity: 1, y: 0,x:0, transition: { duration: 0.3 } },
//         exit: { opacity: 0, y: 50, transition: { duration: 0.3 } },

//     }
// };