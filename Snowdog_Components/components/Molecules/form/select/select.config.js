module.exports = {
  context: {
    script: true,
    label: {
      attributes: '',
      text: 'Label text'
    },
    field: {
      id: 'field-id',
      name: 'field-name',
      class: '',
      attributes: ''
    },
    options: [
      {
        value: 'option1',
        text: 'Option 1'
      },
      {
        value: 'option2',
        text: 'Option 2'
      },
      {
        value: 'option3',
        text: 'Option 3',
        attributes: 'disabled'
      }
    ]
  },
  variants: [
    {
      name: 'native',
      context: {
        script: false,
        class: 'select--native'
      }
    },
    {
      name: 'inline',
      context: {
        class: 'select--inline'
      }
    },
    {
      name: 'with-button',
      context: {
        class: 'select--with-button',
        button: {
          class: 'select__button'
        }
      }
    }
  ]
};
