var dragover = function(e) {
  e.preventDefault();
};
var upload_cnt = 0;
var drop = function(e) {
  // ブラウザの機能をキャンセルします
  e.preventDefault();

  // ファイルを取り出します
  var files = e.dataTransfer.files;
  upload_cnt = 0;
  file_num = files.length;

  // 1件ずつアップロード関数を呼びます
  for (var i = 0; i < files.length; i++) {
    ajax_upload(files[i]);
  }
};

var ajax_upload = function(file) {
  var form_data = new FormData();
  form_data.append('file', file);
  var func = function() {
    upload_cnt++;
    if(file_num == upload_cnt) {
      alert('アップロードが完了しました');
    }
  };
  $.ajax({
    type: 'POST',
    url: '（アップロード処理を行うサーバー側のURL）',
    data: form_data,
    success: func
  });
};
