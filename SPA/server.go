package main

import (
        "net/http"
)

func main() {
        http.HandleFunc("/item", index)
        http.HandleFunc("/post", index)
        http.Handle("/static/", http.FileServer(http.Dir(".")))
        http.HandleFunc("/", func(w http.ResponseWriter, req *http.Request) {
                // The "/" pattern matches everything, so we need to check
                // that we're at the root here.
                if req.URL.Path != "/" {
                    http.NotFound(w, req)
                    return
                }
                http.ServeFile(w, req, "index.html")
        })

        http.ListenAndServe(":3000", nil)
}

func index(w http.ResponseWriter, r *http.Request) {
        http.ServeFile(w, r, "index.html")
}

