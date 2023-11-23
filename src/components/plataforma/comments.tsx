"use client";

import { ChangeEvent, useState } from "react";

import { Comment } from "./comment";
import clsx from "clsx";

export function Comments() {
  const [commentContent, setCommentContent] = useState("");
  const [commentAlert, setCommentAlert] = useState(false);

  const [comments, setComments] = useState([
    { name: "Rodolfo Lactovitz", content: "Defina 'efeitos colaterais'." },
    { name: "Claudia Leite", content: "Digamos que é uma reação química perigosa dentro do nosso intestino." },
    { name: "Alice Pedrada", content: "Ahh, eu recomendo aquele remédio 'Enzilac', ele reduz bastante o efeito do leite." },
  ]);

  function handleTextareaChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const { value } = event.target;

    setCommentAlert(false);
    setCommentContent(value);
  }

  function postComment() {
    if (!commentContent) {
      setCommentAlert(true);

      return;
    }

    const name = sessionStorage.getItem("name");

    if (!name) return;

    const newComment = { name, content: commentContent };

    setComments((prevComments) => [...prevComments, newComment]);
    setCommentContent("");
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <h3>Comentários</h3>

      <div className="flex flex-col gap-4">
        {comments.map(({ name, content }, index) => (
          <Comment key={index} name={name} content={content} />
        ))}
      </div>

      <h3>Contribua com sua resposta</h3>

      <div className="flex flex-col gap-4">
        <textarea
          name="comment"
          id="comment"
          value={commentContent}
          onChange={handleTextareaChange}
          className={clsx(
            "h-32 p-4 border rounded-lg resize-none outline-none transition-all",
            "focus:border-primary",
            { "border-red": commentAlert },
            { "border-blue-extra-light": !commentAlert }
          )}
        />

        <button onClick={postComment} className="h-10 w-fit px-4 bg-primary rounded-lg text-white font-medium">
          Postar comentário
        </button>
      </div>
    </div>
  );
}
