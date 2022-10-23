import React, { useEffect } from 'react';
import ReactQuill from 'react-quill';
import PropTypes from 'prop-types';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

const Editor = styled.div`
  margin: 16px 0;
  .ql-toolbar {
    background-color: ${(props) => props.theme.palette.primary.background_light_gray};
    border-bottom: none;
    border-radius: 10px 10px 0 0;
  }
  .ql-container {
    border-radius: 0 0 10px 10px;
  }
  .ql-editor {
    min-height: 200px;
    &.ql-blank::before {
      color: ${(props) => props.theme.palette.primary.background_dark_gray};
      font-style: unset;
    }
  }
`;

function RichTextEditor({ value, setValue, placeholder }) {
  useEffect(() => {
    if (value === '<p><br></p>') {
      setValue('');
    }
  }, [value]);
  const modules = {
    toolbar: [
      ['bold', 'italic'],
      [
        {
          list: 'bullet',
        },
        {
          list: 'ordered',
        },
      ],
      ['clean'],
    ],
  };

  return (
    <Editor>
      <ReactQuill
        theme="snow"
        modules={modules}
        value={value}
        onChange={setValue}
        placeholder={placeholder}
      />
    </Editor>
  );
}

RichTextEditor.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

RichTextEditor.defaultProps = {
  placeholder: '',
};

export default RichTextEditor;