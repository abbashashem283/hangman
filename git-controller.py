import os

def add():
    os.system(f"git add .")

def commit():
    message = input("enter commit message:\n")
    os.system(f'git commit -m "{message}"')

def status():
    os.system("git status")

def pull():
    os.system("git pull")

def push():
    os.system("git push")

def record():
    add()
    commit()
    pull()
    push()


while True:
    print("\n\n===============================\n\n")
    command = input("a: add | c: commit | s: status | push: push | pull: pull | r: record\n")
    if command == "a":
        add()
    elif command == "c":
        commit()
    elif command == "s":
        status()
    elif command == "push":
        push()
    elif command == "pull":
        pull()
    elif command == "r":
        record()
