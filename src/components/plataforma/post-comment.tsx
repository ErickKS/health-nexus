"use client";

export function PostComment() {
  function postComment() {}
  return (
    <div className="flex flex-col gap-4">
      <textarea
        name="comment"
        id="comment"
        className="h-32 p-4 border border-[#E5EAEF] rounded-lg resize-none outline-none transition-all focus:border-[#123359]"
      ></textarea>

      <button onClick={postComment} className="h-10 w-fit px-4 bg-[#123359] rounded-lg text-white font-medium">
        Postar comentário
      </button>
    </div>
  );
}
