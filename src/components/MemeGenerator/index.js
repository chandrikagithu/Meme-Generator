import {Component} from 'react'

import {
  Heading,
  LabelElement,
  InputElement,
  ButtonElement,
  Container,
  Paragraph,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: 8,
    generated: false,
  }

  OnChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  OnChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  OnChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  changeFontSize = event => {
    this.setState({fontSize: parseInt(event.target.value)})
  }

  generateMeme = () => {
    this.setState({generated: true})
  }

  memeContainer = () => {
    const {imageUrl, topText, fontSize, bottomText} = this.state

    return (
      <Container backgroundUrl={imageUrl} data-testid="meme">
        <Paragraph fontSize={fontSize}>{topText}</Paragraph>
        <Paragraph fontSize={fontSize}>{bottomText}</Paragraph>
      </Container>
    )
  }

  render() {
    const {generated} = this.state
    return (
      <div>
        <div>
          <Heading>Meme Generator</Heading>
          <form>
            <LabelElement htmlFor="imageUrl">Image URL</LabelElement>
            <br />
            <InputElement
              id="imageUrl"
              placeholder="Enter the Image Url"
              onChange={this.OnChangeImageUrl}
            />
            <br />
            <LabelElement htmlFor="topText">Top Text</LabelElement>
            <br />
            <InputElement
              id="topText"
              placeholder="Enter the Top Text"
              onChange={this.OnChangeTopText}
            />
            <br />
            <LabelElement htmlFor="bottomText">bottom Text</LabelElement>
            <br />
            <InputElement
              id="bottomText"
              placeholder="Enter the bottom Text"
              onChange={this.OnChangeBottomText}
            />
            <br />
            <LabelElement htmlFor="fontSize">Font Size</LabelElement>
            <br />
            <select id="fontSize" onChange={this.changeFontSize}>
              {fontSizesOptionsList.map(fontSize => (
                <option
                  value={fontSize.optionId}
                  selected={fontSize.optionId === '8'}
                  key={fontSize.optionId}
                >
                  {fontSize.displayText}
                </option>
              ))}
            </select>
            <br />
            <ButtonElement type="button" onClick={this.generateMeme}>
              Generate
            </ButtonElement>
            <br />
          </form>
        </div>
        {generated && this.memeContainer()}
      </div>
    )
  }
}

export default MemeGenerator
