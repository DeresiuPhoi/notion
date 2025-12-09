document.addEventListener("click", async (e) => {
  if (e.target.matches(".delete-btn")) {
    const id = e.target.dataset.id;

    try {
      const res = await fetch(`/delete/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        console.error("Delete failed", res.status);
        return;
      }

      // Обновить список
      window.location.reload();
    } catch (err) {
      console.error("Fetch error", err);
    }
  }
});
