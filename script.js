document.getElementById("download_installer").addEventListener("click", () => {
  createDownloadLink("installer")
})

document.getElementById("download_portable_x64").addEventListener("click", () => {
  createDownloadLink("portable_x64")
})

document.getElementById("download_portable_x86").addEventListener("click", () => {
  createDownloadLink("portable_x86")
})

function createDownloadLink(type) {
  const a = document.createElement("a")
  document.body.appendChild(a)

  switch (type) {
    case "installer":
      a.href = "https://mirumi.me/wp-content/uploads/zenbu-hiraku_setup.exe"
      break
    case "portable_x64":
      a.href = "https://mirumi.me/wp-content/uploads/zenbu-hiraku_x64.exe"
      break
    case "portable_x86":
      a.href = "https://mirumi.me/wp-content/uploads/zenbu-hiraku_ia32.exe"
      break
  }

  a.download = true
  a.click()
  a.remove()
}

const date = new Date()
document.getElementById("year").textContent = date.getFullYear()
