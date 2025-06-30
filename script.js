require.config({ paths: { vs: "https://unpkg.com/monaco-editor@0.34.1/min/vs" } });

require(["vs/editor/editor.main"], function () {
  window.editor = monaco.editor.create(document.getElementById("editor"), {
    value: "// Write your code here...",
    language: "javascript",
    theme: "vs-dark",
  });

  document.getElementById("language").addEventListener("change", (e) => {
    monaco.editor.setModelLanguage(editor.getModel(), e.target.value);
  });
});

function runCode() {
  const lang = document.getElementById("language").value;
  const code = editor.getValue();
  const output = document.getElementById("output");

  if (lang === "html") {
    output.srcdoc = code;
  } else if (lang === "javascript") {
    output.srcdoc = `<script>${code}<\/script>`;
  } else if (lang === "css") {
    output.srcdoc = `<style>${code}</style><div class='test'>Styled Output</div>`;
  } else {
    output.srcdoc = "Language not supported in-browser.";
  }
}
