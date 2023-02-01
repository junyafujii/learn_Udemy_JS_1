import "./styles.css";

//追加ボタン用イベント
const onClickAdd = () => {
  //テキストボックスの値を取得し初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  //押された削除ボタンの親タグ(div)を未完了リストから削除
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストを追加する
const createIncompleteList = (text) => {
  //外側のdiv生成
  const div = document.createElement("div");
  div.className = "list-row";

  //内側のdiv生成
  const div2 = document.createElement("div");
  div2.innerText = text;

  //li生成
  const li = document.createElement("li");

  //complete button生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(div)を未完了リストから削除し、完了リストに追加
    deleteFromIncompleteList(completeButton.parentNode.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode.parentNode;

    //ToDo内容テキスト
    const text = addTarget.firstElementChild.firstElementChild.innerText;

    //戻すボタンの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //完了リストに追加する要素
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //ToDo内容テキスト
      const text = deleteTarget.firstElementChild.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //要素の結合
    //li生成
    const completeLi = document.createElement("li");

    //外側のdiv生成
    const completeDiv = document.createElement("div");
    completeDiv.className = "list-row";

    //内側のdiv生成
    const completeDiv2 = document.createElement("div");
    completeDiv2.innerText = text; //完了したToDoの方へ追加

    completeDiv.appendChild(completeDiv2);
    completeDiv.appendChild(backButton);
    completeLi.appendChild(completeDiv);
    document.getElementById("complete-list").appendChild(completeLi);
  });

  //delete button生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  //要素の結合
  div.appendChild(div2);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  document.getElementById("incomplete-list").appendChild(li);
};

//追加ボタンクリックイベント
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
