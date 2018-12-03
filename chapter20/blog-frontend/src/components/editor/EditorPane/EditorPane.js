import React,{Component} from 'react';
import styles from './EditorPane.scss';
import classNames from 'classnames/bind';

import CodeMirror from 'codemirror';


import 'codemirror/mode/markdown/markdown'; // 마크다운 문법 색상
// 마크다운 내부에 들어가는 코드 색상
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
import 'codemirror/mode/shell/shell';

// CodeMirror를 위한 CSS 스타일
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';


const cx = classNames.bind(styles);

class EditorPane extends Component{

  editor = null;
  codeMirror = null;  

  initializeEditor =()=>{
    CodeMirror(this.editor,{
      
    })
    this.codeMirror = CodeMirror(this.editor, {
      mode: 'markdown',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true
    });

    console.log(this.codeMirror);
  }

  componentDidMount(){
    this.initializeEditor();
    console.log(this.editor);
  }
  render(){
    return(
      <div className = {cx('editor-pane')}>
        <input className={cx('title')} placeholder="제목을 입력하세요" name="title"/>
        <div className = {cx('code-editor')} ref={ref => this.editor=ref }>#h</div>
        <div className={cx('tags')}>
          <div className={cx('description')}>태그</div>
          <input names="tags" placeholder="태그를 입력해주세요(쉼표로 구분)"/>
        </div>
      </div>
    )
  }
}


export default EditorPane;