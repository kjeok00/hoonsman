import { useState, useEffect, useRef } from 'react'
import Styles from './samplepage.module.css'

import img2 from '../img/DSC09024.JPG'
import img3 from '../img/DSC09113.JPG'
import img4 from '../img/DSC09161.JPG'
import img5 from '../img/DSC09213.JPG'
import img6 from '../img/DSC09260.JPG'
import img7 from '../img/img1.png'
import img8 from '../img/img2.png'
import img9 from '../img/img3.png'
import img10 from '../img/img4.png'
import img11 from '../img/DSC09023.JPG'

const WrapperWidth = 360 // 화면 width
const WrapperHeight = 800 // 화면 height

const imgs = [
    img7, //0
    img10, //1
    img2,
    img3,
    img4,
    img9, //5
    img8,
    img10,
    img5,
    img8, // 9
    img6,
    img9,
    img10,
    img11,
]

const imageMotion = {
    s1: [
        {
            imageIndex: 0,
            paintX: [0, WrapperWidth],
            paintY: [0, WrapperHeight],
            paintRatio: [0, 0.001],
            removeRatio: [0.999, 1],
        },
    ],
    s2: [
        {
            imageIndex: 1,
            paintX: [0, WrapperWidth],
            paintY: [0, WrapperHeight],
            paintRatio: [0, 0.0001],
            removeRatio: [0.32, 0.38],
        },
        {
            imageIndex: 2,
            paintX: [0, WrapperWidth],
            paintY: [0, WrapperHeight],
            paintRatio: [0.32, 0.38],
            removeRatio: [0.52, 0.58],
        },
        {
            imageIndex: 3,
            paintX: [0, WrapperWidth],
            paintY: [0, WrapperHeight],
            paintRatio: [0.52, 0.58],
            removeRatio: [0.72, 0.78],
        },
        {
            imageIndex: 4,
            paintX: [0, WrapperWidth],
            paintY: [0, WrapperHeight],
            paintRatio: [0.72, 0.78],
            removeRatio: [0.9999, 1],
        },
    ],
    s3: [
        {
            imageIndex: 5,
            paintX: [0, WrapperWidth],
            paintY: [0, WrapperHeight],
            paintRatio: [0, 0.0001],
            removeRatio: [0.32, 0.38],
        },
        {
            imageIndex: 6,
            paintX: [0, WrapperWidth],
            paintY: [0, WrapperHeight],
            paintRatio: [0.32, 0.38],
            removeRatio: [0.52, 0.58],
        },
        {
            imageIndex: 7,
            paintX: [0, WrapperWidth],
            paintY: [0, WrapperHeight],
            paintRatio: [0.52, 0.58],
            removeRatio: [0.72, 0.78],
        },
        {
            imageIndex: 8,
            paintX: [0, WrapperWidth],
            paintY: [0, WrapperHeight],
            paintRatio: [0.72, 0.78],
            removeRatio: [0.9999, 1],
        },
    ],
    s4: [
        {
            imageIndex: 9,
            paintX: [0, WrapperWidth],
            paintY: [0, WrapperHeight],
            paintRatio: [0, 0.001],
            removeRatio: [0.5, 0.6],
        },
        {
            imageIndex: 10,
            paintX: [0, WrapperWidth],
            paintY: [0, WrapperHeight],
            paintRatio: [0.5, 0.6],
            removeRatio: [0.99, 1],
        },
    ],
}

const messageMotion = {
    s1: {
        s1_m1: {
            opacityIn: [0, 1],
            opacityOut: [1, 0],
            tyIn: [0, -20],
            tyOut: [-20, -40],
            rIn: [0.2, 0.3],
            rOut: [0.7, 0.75],
        },
        s1_m2: {
            opacityIn: [0, 1],
            opacityOut: [1, 0],
            tyIn: [60, 40],
            tyOut: [40, 20],
            rIn: [0.4, 0.5],
            rOut: [0.7, 0.75],
        },
    },
    s2: {
        s2_m1: {
            opacityIn: [0, 1],
            opacityOut: [1, 0],
            tyIn: [20, 0],
            tyOut: [0, -20],
            rIn: [0.18, 0.2],
            rOut: [0.28, 0.3],
        },
        s2_m2: {
            opacityIn: [0, 1],
            opacityOut: [1, 0],
            tyIn: [20, 0],
            tyOut: [0, -20],
            rIn: [0.4, 0.42],
            rOut: [0.48, 0.5],
        },
        s2_m3: {
            opacityIn: [0, 1],
            opacityOut: [1, 0],
            tyIn: [20, 0],
            tyOut: [0, -20],
            rIn: [0.6, 0.62],
            rOut: [0.68, 0.7],
        },
        s2_m4: {
            opacityIn: [0, 1],
            opacityOut: [1, 0],
            tyIn: [20, 0],
            tyOut: [0, -20],
            rIn: [0.8, 0.82],
            rOut: [0.88, 0.9],
        },
    },
    s3: {
        s3_m1: {
            opacityIn: [0, 1],
            opacityOut: [1, 0],
            tyIn: [20, 0],
            tyOut: [0, -20],
            rIn: [0.18, 0.2],
            rOut: [0.28, 0.3],
        },
        s3_m2: {
            opacityIn: [0, 1],
            opacityOut: [1, 0],
            tyIn: [20, 0],
            tyOut: [0, -20],
            rIn: [0.4, 0.42],
            rOut: [0.48, 0.5],
        },
        s3_m3: {
            opacityIn: [0, 1],
            opacityOut: [1, 0],
            tyIn: [20, 0],
            tyOut: [0, -20],
            rIn: [0.6, 0.62],
            rOut: [0.68, 0.7],
        },
        s3_m4: {
            opacityIn: [0, 1],
            opacityOut: [1, 0],
            tyIn: [20, 0],
            tyOut: [0, -20],
            rIn: [0.8, 0.82],
            rOut: [0.88, 0.9],
        },
    },
    s4: {
        s4_m1: {
            opacityIn: [0, 1],
            opacityOut: [1, 0],
            tyIn: [-10, -50],
            tyOut: [-50, -60],
            rIn: [0.3, 0.4],
            rOut: [0.9, 1],
        },
        s4_m2: {
            opacityIn: [0, 1],
            opacityOut: [1, 0],
            tyIn: [70, 50],
            tyOut: [50, 30],
            rIn: [0.6, 0.7],
            rOut: [0.9, 1],
        },
    },
}

// opacity 계산
const calcOpacity = (ratio, opacity, ratioRange) => {
    let op
    if (opacity[0] > 0)
        op =
            opacity[0] -
            (ratio - ratioRange[0]) / (ratioRange[1] - ratioRange[0])
    else op = (ratio - ratioRange[0]) / (ratioRange[1] - ratioRange[0])
    if (op < 0) op = 0
    else if (op >= 1) op = 1
    return op
}

// traslateY값 계산
const calcTranslate = (ratio, translate, ratioRange) => {
    let mTransY =
        translate[0] +
        (translate[1] - translate[0]) *
            ((ratio - ratioRange[0]) / (ratioRange[1] - ratioRange[0]))
    if (mTransY < translate[1]) mTransY = translate[1]
    else if (mTransY >= translate[0]) mTransY = translate[0]
    return mTransY
}

// canvas에 message 그리는 함수
const drawMessageInCavas = (ratio, mes, sceneN, mName) => {
    const m1Boundary =
        (messageMotion[sceneN][mName].rOut[0] +
            messageMotion[sceneN][mName].rIn[1]) /
        2

    let mOp, mTransY

    // message가 나타나는 모션
    if (ratio < m1Boundary) {
        mOp = calcOpacity(
            ratio,
            messageMotion[sceneN][mName].opacityIn,
            messageMotion[sceneN][mName].rIn,
        )
        mTransY = calcTranslate(
            ratio,
            messageMotion[sceneN][mName].tyIn,
            messageMotion[sceneN][mName].rIn,
        )

        // message가 사라지는 모션
    } else {
        mOp = calcOpacity(
            ratio,
            messageMotion[sceneN][mName].opacityOut,
            messageMotion[sceneN][mName].rOut,
        )
        mTransY = calcTranslate(
            ratio,
            messageMotion[sceneN][mName].tyOut,
            messageMotion[sceneN][mName].rOut,
        )
    }

    mes.current.style.opacity = mOp
    mes.current.style.transform = `translateX(-50%) translateY(calc(-50% + ${mTransY}px))`
}

// canvas에 image 그리는 함수
const drawImageInCanvas = (
    ctx,
    canvasWidth,
    canvasHeight,
    ratio,
    sceneN,
    image,
    value,
) => {
    const boundary = (value.removeRatio[0] + value.paintRatio[1]) / 2

    const cRange = value.paintRatio[1] - value.paintRatio[0]
    const rRange = value.removeRatio[1] - value.removeRatio[0]

    let pR = (ratio - value.paintRatio[0]) / cRange
    // 현재 진행 씬 ratio - 사라질 모션이 시작되는 ratio 시점 / 사라지는 모션의 범위
    let rRatio = (ratio - value.removeRatio[0]) / rRange

    if (pR < 0) pR = 0
    if (pR > 1) pR = 1
    if (rRatio < 0) rRatio = 0
    if (rRatio > 1) rRatio = 1

    // scene2, scene4에 적용할 이미지 변경 효과
    if (sceneN === 's2' || sceneN === 's4') {
        if (ratio < boundary) {
            // Draw In
            ctx.drawImage(
                image['img'],
                image['width'] - pR * image['width'],
                0,
                pR * image['width'],
                image['height'],
                canvasWidth - canvasWidth * pR,
                0,
                canvasWidth * pR,
                canvasHeight,
            )
        } else {
            // DrawOut
            ctx.drawImage(
                image['img'],
                0,
                0,
                image['width'] - rRatio * image['width'],
                image['height'],
                0,
                0,
                canvasWidth - canvasWidth * rRatio,
                canvasHeight,
            )
        }
        // scene3에 적용할 이미지 변경 효과
    } else {
        if (ratio < boundary) {
            ctx.drawImage(
                image['img'],
                0,
                0,
                pR * image['width'],
                image['height'],
                0,
                0,
                canvasWidth * pR,
                canvasHeight,
            )
        } else {
            // DrawOut
            ctx.drawImage(
                image['img'],
                rRatio * image['width'],
                0,
                image['width'] - rRatio * image['width'],
                image['height'],
                canvasWidth * rRatio,
                0,
                canvasWidth - canvasWidth * rRatio,
                canvasHeight,
            )
        }
    }
}

// Sample Data

const data = {
    scene1: {
        image: {
            1: {
                path: imgs[0],
            },
        },
        message: {
            1: {
                content: '신부 ooo 신랑 ooo ',
                size: 'medium',
                color: 'white',
            },
            2: {
                content: '결혼합니다',
                size: 'medium',
                color: 'white',
            },
        },
    },
    scene2: {
        image: {
            1: {
                path: imgs[1],
            },
            2: {
                path: imgs[2],
            },
            3: {
                path: imgs[3],
            },
            4: {
                path: imgs[4],
            },
        },
        message: {
            1: {
                content: '햇살처럼 따뜻하게 안아줄 수 있는',
                size: 'medium',
                color: 'white',
            },
            2: {
                content: '늘 곁에서 서로를 웃게 해줄 수 있는',
                size: 'medium',
                color: 'white',
            },
            3: {
                content: '소중한 사람을 만났습니다.',
                size: 'medium',
                color: 'white',
            },
            4: {
                content: '햇살 가득한 10월 결혼합니다.',
                size: 'medium',
                color: 'white',
            },
        },
    },
    scene3: {
        image: {
            1: {
                path: imgs[5],
            },
            2: {
                path: imgs[6],
            },
            3: {
                path: imgs[7],
            },
            4: {
                path: imgs[8],
            },
        },
        message: {
            1: {
                content: '귀한 걸음 하시어 따뜻한 마음으로',
                size: 'medium',
                color: 'white',
            },
            2: {
                content: '기쁜 날, 가까이서 축복해 주시면',
                size: 'medium',
                color: 'white',
            },
            3: {
                content: '축복해 주시면 더 없는 기쁨이 되겠습니다.',
                size: 'medium',
                color: 'white',
            },
            4: {
                content:
                    '소중한 인연과 귀한 발걸음, 저희도 발맞추어 살아가겠습니다',
                size: 'medium',
                color: 'white',
            },
        },
    },
    scene4: {
        image: {
            1: {
                path: imgs[9],
            },
            2: {
                path: imgs[10],
            },
        },
        message: {
            1: {
                content: '날짜',
                size: 'medium',
                color: 'white',
            },
            2: {
                content: '장소',
                size: 'medium',
                color: 'white',
            },
        },
    },
}

export default function SamplePage({ viewWidth, viewHeight }) {
    const size = { width: 360, height: 800 }
    const imageMotion = {
        s1: [
            {
                imageIndex: 0,
                paintX: [0, WrapperWidth],
                paintY: [0, WrapperHeight],
                paintRatio: [0, 0.001],
                removeRatio: [0.999, 1],
            },
        ],
        s2: [
            {
                imageIndex: 1,
                paintX: [0, WrapperWidth],
                paintY: [0, WrapperHeight],
                paintRatio: [0, 0.0001],
                removeRatio: [0.32, 0.38],
            },
            {
                imageIndex: 2,
                paintX: [0, WrapperWidth],
                paintY: [0, WrapperHeight],
                paintRatio: [0.32, 0.38],
                removeRatio: [0.52, 0.58],
            },
            {
                imageIndex: 3,
                paintX: [0, WrapperWidth],
                paintY: [0, WrapperHeight],
                paintRatio: [0.52, 0.58],
                removeRatio: [0.72, 0.78],
            },
            {
                imageIndex: 4,
                paintX: [0, WrapperWidth],
                paintY: [0, WrapperHeight],
                paintRatio: [0.72, 0.78],
                removeRatio: [0.9999, 1],
            },
        ],
        s3: [
            {
                imageIndex: 5,
                paintX: [0, WrapperWidth],
                paintY: [0, WrapperHeight],
                paintRatio: [0, 0.0001],
                removeRatio: [0.32, 0.38],
            },
            {
                imageIndex: 6,
                paintX: [0, WrapperWidth],
                paintY: [0, WrapperHeight],
                paintRatio: [0.32, 0.38],
                removeRatio: [0.52, 0.58],
            },
            {
                imageIndex: 7,
                paintX: [0, WrapperWidth],
                paintY: [0, WrapperHeight],
                paintRatio: [0.52, 0.58],
                removeRatio: [0.72, 0.78],
            },
            {
                imageIndex: 8,
                paintX: [0, WrapperWidth],
                paintY: [0, WrapperHeight],
                paintRatio: [0.72, 0.78],
                removeRatio: [0.9999, 1],
            },
        ],
        s4: [
            {
                imageIndex: 9,
                paintX: [0, WrapperWidth],
                paintY: [0, WrapperHeight],
                paintRatio: [0, 0.001],
                removeRatio: [0.5, 0.6],
            },
            {
                imageIndex: 10,
                paintX: [0, WrapperWidth],
                paintY: [0, WrapperHeight],
                paintRatio: [0.5, 0.6],
                removeRatio: [0.99, 1],
            },
        ],
    }
    viewWidth = size.width
    viewHeight = size.height

    const [isLoading, setIsLoading] = useState(true)
    const [imgInfo, setImgInfo] = useState({})
    const wRef = useRef() // wrapper
    const c1Ref = useRef() // canvas1
    const c2Ref = useRef() // canvas2
    const c3Ref = useRef() // canvas3
    const c4Ref = useRef() // canvas4
    const s1Ref = useRef() // scene1
    const s2Ref = useRef() // scene2
    const s3Ref = useRef() // scene3
    const s4Ref = useRef() // scene4
    const s1_m1Ref = useRef()
    const s1_m2Ref = useRef()
    const s2_m1Ref = useRef()
    const s2_m2Ref = useRef()
    const s2_m3Ref = useRef()
    const s2_m4Ref = useRef()
    const s2_m5Ref = useRef()
    const s3_m1Ref = useRef()
    const s3_m2Ref = useRef()
    const s3_m3Ref = useRef()
    const s3_m4Ref = useRef()
    const s3_m5Ref = useRef()
    const s4_m1Ref = useRef()
    const s4_m2Ref = useRef()

    useEffect(() => {
        if (
            !wRef ||
            !c1Ref ||
            !c2Ref ||
            !c3Ref ||
            !c4Ref ||
            !s1Ref ||
            !s2Ref ||
            !s3Ref ||
            !s4Ref ||
            !s1_m1Ref ||
            !s1_m2Ref ||
            !s2_m1Ref ||
            !s2_m2Ref ||
            !s2_m3Ref ||
            !s2_m4Ref ||
            !s2_m5Ref ||
            !s3_m1Ref ||
            !s3_m2Ref ||
            !s3_m3Ref ||
            !s3_m4Ref ||
            !s3_m5Ref ||
            !s4_m1Ref ||
            !s4_m2Ref ||
            isLoading
        )
            return

        const wrapperCurrent = wRef.current

        // 캔버스 초기 화면 설정
        const ctx1 = c1Ref.current.getContext('2d')
        ctx1.drawImage(
            imgInfo[data.scene1.image[1].path].img,
            0,
            0,
            viewWidth,
            viewHeight,
        )
        const ctx2 = c2Ref.current.getContext('2d')
        ctx2.drawImage(
            imgInfo[data.scene2.image[1].path].img,
            0,
            0,
            viewWidth,
            viewHeight,
        )
        const ctx3 = c3Ref.current.getContext('2d')
        ctx3.drawImage(
            imgInfo[data.scene3.image[1].path].img,
            0,
            0,
            viewWidth,
            viewHeight,
        )
        const ctx4 = c4Ref.current.getContext('2d')
        ctx4.drawImage(
            imgInfo[data.scene4.image[1].path].img,
            0,
            0,
            viewWidth,
            viewHeight,
        )

        const onWrapperScroll = (e) => {
            if (
                e.currentTarget.getBoundingClientRect().top -
                    s1Ref.current.getBoundingClientRect().top >
                    -viewHeight &&
                e.currentTarget.getBoundingClientRect().top -
                    s1Ref.current.getBoundingClientRect().top <
                    s1Ref.current.offsetHeight
            ) {
                const scrollY =
                    e.currentTarget.getBoundingClientRect().top -
                    s1Ref.current.getBoundingClientRect().top
                const scrollRatio = scrollY / s1Ref.current.offsetHeight
                drawMessageInCavas(scrollRatio, s1_m1Ref, 's1', 's1_m1')
                drawMessageInCavas(scrollRatio, s1_m2Ref, 's1', 's1_m2')
            }

            if (
                e.currentTarget.getBoundingClientRect().top -
                    s2Ref.current.getBoundingClientRect().top >
                    -viewHeight &&
                e.currentTarget.getBoundingClientRect().top -
                    s2Ref.current.getBoundingClientRect().top <
                    s2Ref.current.offsetHeight
            ) {
                const scrollY =
                    e.currentTarget.getBoundingClientRect().top -
                    s2Ref.current.getBoundingClientRect().top
                const scrollRatio = scrollY / s2Ref.current.offsetHeight

                drawMessageInCavas(scrollRatio, s2_m1Ref, 's2', 's2_m1')
                drawMessageInCavas(scrollRatio, s2_m2Ref, 's2', 's2_m2')
                drawMessageInCavas(scrollRatio, s2_m3Ref, 's2', 's2_m3')
                drawMessageInCavas(scrollRatio, s2_m4Ref, 's2', 's2_m4')
                imageMotion['s2'].forEach((value, index) => {
                    drawImageInCanvas(
                        ctx2,
                        viewWidth,
                        viewHeight,
                        scrollRatio,
                        's2',
                        imgInfo[data.scene2.image[index + 1].path],
                        value,
                    )
                })
            }

            if (
                e.currentTarget.getBoundingClientRect().top -
                    s3Ref.current.getBoundingClientRect().top >
                    -viewHeight &&
                e.currentTarget.getBoundingClientRect().top -
                    s3Ref.current.getBoundingClientRect().top <
                    s3Ref.current.offsetHeight
            ) {
                const scrollY =
                    e.currentTarget.getBoundingClientRect().top -
                    s3Ref.current.getBoundingClientRect().top
                const scrollRatio = scrollY / s3Ref.current.offsetHeight

                drawMessageInCavas(scrollRatio, s3_m1Ref, 's3', 's3_m1')
                drawMessageInCavas(scrollRatio, s3_m3Ref, 's3', 's3_m3')
                drawMessageInCavas(scrollRatio, s3_m2Ref, 's3', 's3_m2')
                drawMessageInCavas(scrollRatio, s3_m4Ref, 's3', 's3_m4')
                imageMotion['s3'].forEach((value, index) => {
                    drawImageInCanvas(
                        ctx3,
                        viewWidth,
                        viewHeight,
                        scrollRatio,
                        's3',
                        imgInfo[data.scene3.image[index + 1].path],
                        value,
                    )
                })
            }

            if (
                e.currentTarget.getBoundingClientRect().top -
                    s4Ref.current.getBoundingClientRect().top >
                    -viewHeight &&
                e.currentTarget.getBoundingClientRect().top -
                    s4Ref.current.getBoundingClientRect().top <
                    s4Ref.current.offsetHeight
            ) {
                const scrollY =
                    e.currentTarget.getBoundingClientRect().top -
                    s4Ref.current.getBoundingClientRect().top
                const scrollRatio = scrollY / s4Ref.current.offsetHeight

                drawMessageInCavas(scrollRatio, s4_m1Ref, 's4', 's4_m1')
                drawMessageInCavas(scrollRatio, s4_m2Ref, 's4', 's4_m2')
                imageMotion['s4'].forEach((value, index) => {
                    drawImageInCanvas(
                        ctx4,
                        viewWidth,
                        viewHeight,
                        scrollRatio,
                        's4',
                        imgInfo[data.scene4.image[index + 1].path],
                        value,
                    )
                })
            }
        }

        wrapperCurrent.addEventListener('scroll', onWrapperScroll)
        return () => {
            wrapperCurrent.removeEventListener('scroll', onWrapperScroll)
        }
    }, [
        wRef,
        c1Ref,
        c2Ref,
        c3Ref,
        c4Ref,
        s1Ref,
        s2Ref,
        s3Ref,
        s4Ref,
        s1_m1Ref,
        s1_m2Ref,
        s2_m1Ref,
        s2_m2Ref,
        s2_m3Ref,
        s2_m4Ref,
        s2_m5Ref,
        s3_m1Ref,
        s3_m2Ref,
        s3_m3Ref,
        s3_m4Ref,
        s3_m5Ref,
        s4_m1Ref,
        s4_m2Ref,
        isLoading,
        imgInfo,
    ])

    useEffect(() => {
        const onWindowLoad = () => {
            setIsLoading(false)
        }
        imgs.forEach((src) => {
            const img = new Image()
            img.src = src
            img.addEventListener('load', (e) => {
                setImgInfo((v) => {
                    return {
                        ...v,
                        [src]: {
                            img: img,
                            path: img.src,
                            width: img.naturalWidth,
                            height: img.naturalHeight,
                        },
                    }
                })
            })
        })
        window.addEventListener('load', onWindowLoad)
        return () => {
            window.removeEventListener('load', onWindowLoad)
        }
    }, [])

    return (
        <div className={Styles.container}>
            <div
                ref={wRef}
                className={Styles.wrapper}
                style={{ height: `${viewHeight}px`, width: `${viewWidth}px` }}
            >
                {isLoading ? (
                    'Loading...'
                ) : (
                    <>
                        <div
                            ref={s1Ref}
                            className={Styles.scene1}
                            style={{
                                height: `${viewHeight * 5}px`,
                                width: `${viewWidth}px`,
                            }}
                        >
                            <div
                                className={Styles.scenecontainer}
                                style={{ height: `${viewHeight}px` }}
                            >
                                <canvas
                                    ref={c1Ref}
                                    className={Styles.mycanvas}
                                    width={viewWidth}
                                    height={viewHeight}
                                ></canvas>
                                <div
                                    ref={s1_m1Ref}
                                    className={Styles.message}
                                    style={{
                                        width: `${viewWidth * 0.8}px`,
                                        color: `${data.scene1.message[1].color}`,
                                        fontSize: `${
                                            data.scene1.message[1].size ===
                                            'small'
                                                ? 18
                                                : data.scene1.message[1]
                                                      .size === 'medium'
                                                ? 25
                                                : data.scene1.message[1]
                                                      .size === 'large' && 32
                                        }px`,
                                    }}
                                >
                                    {data.scene1.message[1].content}
                                </div>
                                <div
                                    ref={s1_m2Ref}
                                    className={Styles.message}
                                    style={{
                                        width: `${viewWidth * 0.8}px`,
                                        color: `${data.scene1.message[2].color}`,
                                        fontSize: `${
                                            data.scene1.message[2].size ===
                                            'small'
                                                ? 18
                                                : data.scene1.message[2]
                                                      .size === 'medium'
                                                ? 25
                                                : data.scene1.message[2]
                                                      .size === 'large' && 32
                                        }px`,
                                    }}
                                >
                                    {data.scene1.message[2].content}
                                </div>
                            </div>
                        </div>
                        <div
                            className={Styles.scene2}
                            ref={s2Ref}
                            style={{
                                height: `${viewHeight * 15}px`,
                                width: `${viewWidth}px`,
                            }}
                        >
                            <div
                                className={Styles.scenecontainer}
                                style={{ height: `${viewHeight}px` }}
                            >
                                <canvas
                                    ref={c2Ref}
                                    className={Styles.mycanvas}
                                    width={viewWidth}
                                    height={viewHeight}
                                ></canvas>
                                <div
                                    ref={s2_m1Ref}
                                    className={Styles.message}
                                    style={{
                                        width: `${viewWidth * 0.8}px`,
                                        color: `${data.scene2.message[1].color}`,
                                        fontSize: `${
                                            data.scene2.message[1].size ===
                                            'small'
                                                ? 18
                                                : data.scene2.message[1]
                                                      .size === 'medium'
                                                ? 25
                                                : data.scene2.message[1]
                                                      .size === 'large' && 32
                                        }px`,
                                    }}
                                >
                                    {data.scene2.message[1].content}
                                </div>
                                <div
                                    ref={s2_m2Ref}
                                    className={Styles.message}
                                    style={{
                                        width: `${viewWidth * 0.8}px`,
                                        color: `${data.scene2.message[2].color}`,
                                        fontSize: `${
                                            data.scene2.message[2].size ===
                                            'small'
                                                ? 18
                                                : data.scene2.message[2]
                                                      .size === 'medium'
                                                ? 25
                                                : data.scene2.message[2]
                                                      .size === 'large' && 32
                                        }px`,
                                    }}
                                >
                                    {data.scene2.message[2].content}
                                </div>
                                <div
                                    ref={s2_m3Ref}
                                    className={Styles.message}
                                    style={{
                                        width: `${viewWidth * 0.8}px`,
                                        color: `${data.scene2.message[3].color}`,
                                        fontSize: `${
                                            data.scene2.message[3].size ===
                                            'small'
                                                ? 18
                                                : data.scene2.message[3]
                                                      .size === 'medium'
                                                ? 25
                                                : data.scene2.message[3]
                                                      .size === 'large' && 32
                                        }px`,
                                    }}
                                >
                                    {data.scene2.message[3].content}
                                </div>
                                <div
                                    ref={s2_m4Ref}
                                    className={Styles.message}
                                    style={{
                                        width: `${viewWidth * 0.8}px`,
                                        color: `${data.scene2.message[4].color}`,
                                        fontSize: `${
                                            data.scene2.message[4].size ===
                                            'small'
                                                ? 18
                                                : data.scene2.message[4]
                                                      .size === 'medium'
                                                ? 25
                                                : data.scene2.message[4]
                                                      .size === 'large' && 32
                                        }px`,
                                    }}
                                >
                                    {data.scene2.message[4].content}
                                </div>
                            </div>
                        </div>
                        <div
                            className={Styles.scene3}
                            ref={s3Ref}
                            style={{
                                height: `${viewHeight * 15}px`,
                                width: `${viewWidth}px`,
                            }}
                        >
                            <div
                                className={Styles.scenecontainer}
                                style={{ height: `${viewHeight}px` }}
                            >
                                <canvas
                                    ref={c3Ref}
                                    className={Styles.mycanvas}
                                    width={viewWidth}
                                    height={viewHeight}
                                ></canvas>
                                <div
                                    ref={s3_m1Ref}
                                    className={Styles.message}
                                    style={{
                                        width: `${viewWidth * 0.8}px`,
                                        color: `${data.scene3.message[1].color}`,
                                        fontSize: `${
                                            data.scene3.message[1].size ===
                                            'small'
                                                ? 18
                                                : data.scene3.message[1]
                                                      .size === 'medium'
                                                ? 25
                                                : data.scene3.message[1]
                                                      .size === 'large' && 32
                                        }px`,
                                    }}
                                >
                                    {data.scene3.message[1].content}
                                </div>
                                <div
                                    ref={s3_m2Ref}
                                    className={Styles.message}
                                    style={{
                                        width: `${viewWidth * 0.8}px`,
                                        color: `${data.scene3.message[2].color}`,
                                        fontSize: `${
                                            data.scene3.message[2].size ===
                                            'small'
                                                ? 18
                                                : data.scene3.message[2]
                                                      .size === 'medium'
                                                ? 25
                                                : data.scene3.message[2]
                                                      .size === 'large' && 32
                                        }px`,
                                    }}
                                >
                                    {data.scene3.message[2].content}
                                </div>
                                <div
                                    ref={s3_m3Ref}
                                    className={Styles.message}
                                    style={{
                                        width: `${viewWidth * 0.8}px`,
                                        color: `${data.scene3.message[3].color}`,
                                        fontSize: `${
                                            data.scene3.message[3].size ===
                                            'small'
                                                ? 18
                                                : data.scene3.message[3]
                                                      .size === 'medium'
                                                ? 25
                                                : data.scene3.message[3]
                                                      .size === 'large' && 32
                                        }px`,
                                    }}
                                >
                                    {data.scene3.message[3].content}
                                </div>
                                <div
                                    ref={s3_m4Ref}
                                    className={Styles.message}
                                    style={{
                                        width: `${viewWidth * 0.8}px`,
                                        color: `${data.scene3.message[4].color}`,
                                        fontSize: `${
                                            data.scene3.message[4].size ===
                                            'small'
                                                ? 18
                                                : data.scene3.message[4]
                                                      .size === 'medium'
                                                ? 25
                                                : data.scene3.message[4]
                                                      .size === 'large' && 32
                                        }px`,
                                    }}
                                >
                                    {data.scene3.message[4].content}
                                </div>
                            </div>
                        </div>
                        <div
                            className={Styles.scene4}
                            ref={s4Ref}
                            style={{
                                height: `${viewHeight * 5}px`,
                                width: `${viewWidth}px`,
                            }}
                        >
                            <div
                                className={Styles.scenecontainer}
                                style={{ height: `${viewHeight}px` }}
                            >
                                <canvas
                                    ref={c4Ref}
                                    className={Styles.mycanvas}
                                    width={viewWidth}
                                    height={viewHeight}
                                ></canvas>
                                <div
                                    ref={s4_m1Ref}
                                    className={Styles.message}
                                    style={{
                                        width: `${viewWidth * 0.8}px`,
                                        color: `${data.scene4.message[1].color}`,
                                        fontSize: `${
                                            data.scene4.message[1].size ===
                                            'small'
                                                ? 18
                                                : data.scene4.message[1]
                                                      .size === 'medium'
                                                ? 25
                                                : data.scene4.message[1]
                                                      .size === 'large' && 32
                                        }px`,
                                    }}
                                >
                                    {data.scene4.message[1].content}
                                </div>
                                <div
                                    ref={s4_m2Ref}
                                    className={Styles.message}
                                    style={{
                                        width: `${viewWidth * 0.8}px`,
                                        color: `${data.scene4.message[2].color}`,
                                        fontSize: `${
                                            data.scene4.message[2].size ===
                                            'small'
                                                ? 18
                                                : data.scene4.message[2]
                                                      .size === 'medium'
                                                ? 25
                                                : data.scene4.message[2]
                                                      .size === 'large' && 32
                                        }px`,
                                    }}
                                >
                                    {data.scene4.message[2].content}
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
