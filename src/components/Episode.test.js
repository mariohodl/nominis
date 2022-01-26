import React from "react"
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { prettyDOM } from "@testing-library/dom"
import { shuffle } from "../utils"

import { Episode } from "./Episode"

const episodeSentence = 'They were looking stars in the sky.'


test('espects render a basic content', () => {
    const component = render(<Episode sentence={episodeSentence}/>)
    component.getByText("Let's practice")
})


test('expects to have rendered array with the sentence splitted', () => {
    const component = render(<Episode sentence={episodeSentence}/>)
    const wordsList = component.container.querySelector('words-splitted-list')

    console.log(prettyDOM(wordsList))
})

// with jest
describe('arrayContaining', () => {
    const sentenceSplitted =  episodeSentence.split(" ")
    const shuffledSentenceSplitted =  shuffle(sentenceSplitted)

    it('matches even if received contains elements in other ordeer', () => {
      expect(shuffledSentenceSplitted).toEqual(expect.arrayContaining(sentenceSplitted))
    })
    
  })