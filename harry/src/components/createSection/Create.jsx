import React, { useState, useRef, useEffect } from 'react'
import Styles from './create.module.css'
import SettingPage from './SettingPage'
import Preview from './Preview'
import SampleData from './sampleData'
import ConfirmModal from './ConfirmModal'

import { DBService } from '../../services'

const dbService = new DBService(process.env.REACT_APP_BASE_URL)

const sizeItemList = [
    {
        name: 'Iphone 13 pro max (428 x 926)',
        size: {
            width: 428,
            height: 926,
        },
        index: 0,
    },
    {
        name: 'Android small (360 x 640)',
        size: {
            width: 360,
            height: 640,
        },
        index: 1,
    },
    {
        name: 'Android Large (360 x 800)',
        size: {
            width: 360,
            height: 800,
        },
        index: 2,
    },
    {
        name: 'iPhone SE (320 x 568)',
        size: {
            width: 320,
            height: 568,
        },
        index: 3,
    },
]

const SizeBar = ({ sizeList, listIndex, setSizeListIndex }) => {
    const [isBar, setIsBar] = useState(false)

    const onBarClick = () => {
        setIsBar((v) => !v)
    }

    const onItemClick = (index) => {
        setSizeListIndex(index)
        setIsBar(false)
    }

    return (
        <div className={Styles.sizebar}>
            <div className={`${Styles.bar_container}`}>
                <div
                    onClick={onBarClick}
                    className={`${Styles.bar_item} ${Styles.bar_now} ${
                        isBar && Styles.bar_focus
                    }`}
                >
                    {sizeList[listIndex].name}
                </div>
                {isBar && (
                    <div className={`${Styles.bar_items}`}>
                        {sizeList
                            .filter((_, index) => index !== listIndex)
                            .map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => onItemClick(index)}
                                    className={`${Styles.bar_item}`}
                                >
                                    {item.name}
                                </div>
                            ))}
                    </div>
                )}
            </div>
        </div>
    )
}

const mapType0ToSettingData = (letter) => {
    const newSettingData = []
    Object.keys(letter).forEach((k) => {
        if (k === 'type') return
        const newScene = {
            images: [],
            message: [],
        }
        Object.keys(letter[k].imgs).forEach((imgk) => {
            newScene.images.push(letter[k].imgs[imgk])
        })
        letter[k].messages.forEach((m) => {
            newScene.message.push({ ...m })
        })
        newSettingData.push(newScene)
    })
    return newSettingData
}

const mapSettingDataToType0 = (settingData, letter) => {
    const scenesData = [settingData[0], settingData[1], settingData[2]]
    const letterImgKeys = [
        Object.keys(letter.s1.imgs),
        Object.keys(letter.s2.imgs),
        Object.keys(letter.s3.imgs),
    ]

    const newLetter = {
        type: 0,
        s1: {
            imgs: {}, // intro 1 2 3 4
            messages: [], // 4
        },
        s2: {
            imgs: {}, // 5 6
            messages: [], //4
        },
        s3: {
            imgs: {}, // 7 8
            messages: [], // 2
        },
    }

    scenesData.forEach((sceneData, index) => {
        newLetter[`s${index + 1}`].messages = [...sceneData.message]
    })

    letterImgKeys.forEach((imgKeys, sIndex) => {
        imgKeys.forEach((imgKey, imgIndex) => {
            newLetter[`s${sIndex + 1}`].imgs[imgKey] =
                scenesData[sIndex].images[imgIndex]
        })
    })

    return newLetter
}

export default function Create({ type = 0 }) {
    const [settingData, setSettingData] = useState([
        {
            images: ['none'],
            message: [
                {
                    content: '',
                    size: 'medium',
                    color: 'white',
                },
                {
                    content: '',
                    size: 'medium',
                    color: 'white',
                },
                {
                    content: '',
                    size: 'medium',
                    color: 'white',
                },
            ],
        },
        {
            images: ['none'],
            message: [
                {
                    content: '',
                    size: 'medium',
                    color: 'white',
                },
                {
                    content: '',
                    size: 'medium',
                    color: 'white',
                },
                {
                    content: '',
                    size: 'medium',
                    color: 'white',
                },
                {
                    content: '',
                    size: 'medium',
                    color: 'white',
                },
                {
                    content: '',
                    size: 'medium',
                    color: 'white',
                },
            ],
        },
        {
            images: ['none'],
            message: [
                {
                    content: '',
                    size: 'medium',
                    color: 'white',
                },
                {
                    content: '',
                    size: 'medium',
                    color: 'white',
                },
                {
                    content: '',
                    size: 'medium',
                    color: 'white',
                },
                {
                    content: '',
                    size: 'medium',
                    color: 'white',
                },
            ],
        },
    ])
    const [letter, setLetter] = useState({ ...SampleData[type] })
    const [sceneIndex, setSceneIndex] = useState(0)
    const [messageFocus, setMessageFocus] = useState(0)
    const [sizeListIndex, setSizeListIndex] = useState(0)
    const [previewSize, setPreviewSize] = useState({
        width: 0,
        height: 0,
    })
    const [isModal, setIsModal] = useState(false)
    const [isCreateLetter, setIsCreateLetter] = useState(false)

    const onCreateClick = async () => {
        setIsCreateLetter(true)
        const result = await dbService.createLetter(letter)
        console.log(result)
        setIsCreateLetter(false)
        setIsModal(false)
    }

    // mapping letter data -> settingData
    useEffect(() => {
        const letterType = letter.type
        let mappedSettingData
        switch (letterType) {
            case 0:
                mappedSettingData = mapType0ToSettingData(letter)
                break
        }
        setSettingData(mappedSettingData)
    }, [letter])

    const displayContainerRef = useRef()
    useEffect(() => {
        if (!displayContainerRef) return

        const displayHeight = displayContainerRef.current.offsetHeight

        const { width, height } = sizeItemList[sizeListIndex].size

        const whRatio = width / height

        const vHeight = (displayHeight * 8) / 10
        const vWidth = vHeight * whRatio

        setPreviewSize({
            width: vWidth,
            height: vHeight,
        })
    }, [displayContainerRef, sizeListIndex])
    const onLeftClick = () => {
        if (sceneIndex <= 0) return
        setSceneIndex((v) => v - 1)
        setMessageFocus(0)
    }

    const onRightClick = () => {
        console.log(settingData)
        if (sceneIndex > settingData.length - 2) return
        setSceneIndex((v) => v + 1)
        setMessageFocus(0)
    }

    const setLetterData = () => {
        let newLetter
        switch (type) {
            case 0:
                newLetter = mapSettingDataToType0(settingData, letter)
                break
        }

        setLetter(newLetter)
    }

    return (
        <div className={Styles.container}>
            <div className={Styles.left}>
                <div className={Styles.right_title}>Preview</div>

                <div className={Styles.display_container}>
                    <div
                        ref={displayContainerRef}
                        className={Styles.display__box}
                    >
                        <Preview size={previewSize} sceneData={letter} />
                    </div>
                    <SizeBar
                        sizeList={sizeItemList}
                        listIndex={sizeListIndex}
                        setSizeListIndex={setSizeListIndex}
                    />
                </div>
            </div>
            <div className={Styles.right}>
                <div className={Styles.right_title}>Editor</div>
                <div className={Styles.scene_container}>
                    <div className={Styles.editor_header}>
                        <div
                            onClick={onLeftClick}
                            className={`${Styles.info_btn} ${
                                sceneIndex === 0 && Styles.btn_disabled
                            }`}
                        >
                            {'<'}
                        </div>

                        <div className={Styles.scene_name}>
                            Scene {sceneIndex + 1}
                        </div>

                        <div
                            onClick={onRightClick}
                            className={`${Styles.info_btn} ${
                                sceneIndex === settingData.length - 1 &&
                                Styles.btn_disabled
                            }`}
                        >
                            {'>'}
                        </div>
                    </div>
                    <SettingPage
                        settingData={settingData[sceneIndex]}
                        setSettingData={setSettingData}
                        sceneIndex={sceneIndex}
                        messageFocus={messageFocus}
                        setMessageFocus={setMessageFocus}
                        setLetterData={setLetterData}
                        setIsModal={setIsModal}
                    />
                </div>
                {isModal && (
                    <ConfirmModal
                        sceneData={letter}
                        size={previewSize}
                        setIsModal={setIsModal}
                        onCreateClick={onCreateClick}
                        isCreateLetter={isCreateLetter}
                    />
                )}
            </div>
        </div>
    )
}
