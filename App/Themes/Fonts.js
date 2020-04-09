const type = {
    base: 'Avenir-Book',
    bold: 'Avenir-Black',
    emphasis: 'HelveticaNeue-Italic'
  }
  
  const size = {
    input: 24,
    regular: 18,
    medium: 16,
    small: 14,
   }
  
  const style = {
    regular: {
      fontFamily: type.base,
      fontSize: size.regular
    },
    medium: {
      fontFamily: type.base,
      fontSize: size.medium
    },
    small: {
      fontFamily: type.base,
      fontSize: size.small
    },
    input: {
      fontFamily: type.base,
      fontSize: size.input
    }
  }
  
  export default {
    type,
    size,
    style
  }
  