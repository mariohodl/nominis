import React, { useState, useEffect } from 'react'
import { VoicePlayer } from './VoicePlayer'
import { shuffle } from '../utils/index'

import nominisLogo from '../img/nominis-logo.png'
import emptyHeart from '../img/empty-heart.png'
import fullHeart from '../img/full-heart.png'
import refresh from '../img/refresh.png'
import avatar from '../img/avatar.png'


export function Episode({sentence, showToasterSuccess, showToasterError}) {

    const [stars, setStars] = useState(4)
    const starsEmpty = 5 - stars

    const [sentenceBuilt, setSentenceBuilt] = useState([])
    const [sentenceSplitted, setSentenceSplitted] = useState(sentence.split(" "))

    const arr = shuffle(sentenceSplitted)
    let [sentenceSplittedRandom, setSentenceSplittedRandom] = useState(arr)

    useEffect(()=>{

        if(sentenceBuilt.length == sentenceSplittedRandom.length){
            const sentenceBuiltJoined = sentenceBuilt.join(" ")
            if(sentenceBuiltJoined === sentence){
                showToasterSuccess()
            } else {
                showToasterError()
            }
        }
        
    },[sentenceBuilt])

    const isSelected = (word) => {
        if(sentenceBuilt.includes(word)){
            return true
        } else {
            return false
        }
    }

    const selectWord = (word) =>{

        if(!sentenceBuilt.includes(word)){
            const currentSentenceBuilt = [...sentenceBuilt]
            currentSentenceBuilt.push(word)
            setSentenceBuilt(currentSentenceBuilt)
        }

        
    }

    const refreshSentenceBuilt = () =>{
        setSentenceBuilt([])
    }

    return (
        <div className="flex flex-col flex-row justify-between min-h-full">
            <div className="flex justify-between items-center w-full">
                <figure className="w-28 md:w-44 lg:w-36">
                    <img src={nominisLogo} alt="" className="w-full"/>
                </figure>

                <div className="flex items-center">
                    <div className="flex mx-2">
                        {
                            Array.from(Array(starsEmpty), (e, i) => {
                                return <figure key={i} className="w-5 md:w-8 lg:w-6 mr-1.5">
                                            <img src={emptyHeart} alt="" className="w-full"/>
                                        </figure>
                            })
                        }
                        {
                            Array.from(Array(stars), (e, i) => {
                                return <figure key={i} className="w-5 md:w-8 lg:w-6 mr-1" key={i}>
                                            <img src={fullHeart} alt="" className="w-full"/>
                                        </figure>
                            })
                        }
                        
                    </div>
                    <div className="relative">
                        <VoicePlayer sentence={sentence}/>
                        <figure className="w-10 md:w-12 absolute cursor-pointer" style={{right: '0px', top: '40px'}}>
                            <img src={avatar} alt="" className="w-full"/>
                        </figure>
                    </div>
                    
                </div>
            </div>

            <section className="xl:flex">
                <article className="mb-28 md:mb-60 h-4/5 md:flex items-center intro-box w-full">
                    <div className="md:mt-10 xl:mt-0">
                        <h2 className="text-4xl md:text-6xl xl:text-5xl text-gray-700">Let's practice</h2>
                        <p className="text-2xl md:text-4xl xl:text-3xl text-gray-500 mt-4 md:mt-10 md:w-4/5">Put the words in the right order to make a correct sentence.</p>
                    </div>
                    
                </article>
            
                <article className="flex flex-col justify-between xl:w-10/12">
                    <div className="flex justify-center mb-14">
                        <div className="w-11/12 relative xl:mt-6">
                            <div className="">
                                <figure onClick={ ()=>refreshSentenceBuilt() } className="w-7 absolute cursor-pointer" style={{top: '-34px', right: '0px'}}>
                                    <img src={refresh} alt="" className="w-full"/>
                                </figure>
                                <div className="bg-white text-xl md:text-4xl xl:text-2xl text-gray-500 rounded-md p-3">
                                    {sentenceBuilt.length > 0 ? sentenceBuilt.map((word, i) => {
                                        return <span key={i} className="m-1">{word}</span>
                                    }) :  <span className="m-1 opacity-0">|</span>}
                                </div>
                            </div>
                            <div className="flex mt-4 flex-wrap justify-center words-splitted-list">
                                {sentenceSplittedRandom.map((word, index) =>{
                                    return <div onClick={ ()=>selectWord(word) } key={index} className={ "bg-white cursor-pointer rounded-md py-2 px-3 text-xl md:text-3xl xl:text-xl m-2 " + (isSelected(word) ? 'text-gray-300' : '') }>{word}</div>
                                })}
                            </div>
                        </div>
                        
                    </div>
                </article>

            </section>
            
        </div>
    )
}
