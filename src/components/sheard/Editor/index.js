import { Editor as EditorTinymce } from "@tinymce/tinymce-react";

const Editor = ({value,onChange,})=>{

    return(
        <EditorTinymce
        value = {value}
        onEditorChange={onChange}
        apiKey={process.env.REACT_APP_TINY_MCE_API_KEY}
        init={{
            height: 300,
            menubar: false,
            plugins: [
              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
              'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
            ],
            toolbar: 'undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
    )
}

export default Editor