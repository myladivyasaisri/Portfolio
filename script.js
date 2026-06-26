document.addEventListener("DOMContentLoaded", () => {
    // Console debugging indicator trace validation tracking systems 
    console.log("Core engineering portfolio interaction systems and certificate navigation hooks script active.");

    const viewButtons = document.querySelectorAll(".view-cert-btn");
    const emailCopyBtn = document.getElementById("emailCopyBtn");

    // 1. Dynamic Certificate View Redirection Pipeline Hooks Execution Block
    viewButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            
            const certCard = e.target.closest(".cert-card");
            const certPath = certCard.getAttribute("data-cert");
            
            if (certPath) {
                // Instantiates a clean sandbox structural bypass element to avoid strict local security CORS limitations
                const downloadTrackerAnchor = document.createElement('a');
                downloadTrackerAnchor.href = certPath;
                downloadTrackerAnchor.target = '_blank';
                document.body.appendChild(downloadTrackerAnchor);
                
                // Active browser tab processing sequence execution loop
                downloadTrackerAnchor.click();
                document.body.removeChild(downloadTrackerAnchor);
            }
        });
    });

    // 2. Advanced Clipboard Storage Copy Notifications Logic System Bypass Empty Tab Blank Error Blocks
    if (emailCopyBtn) {
        emailCopyBtn.addEventListener("click", (e) => {
            e.preventDefault();
            
            const officialTargetEmailAddress = "divyasaisri429@gmail.com";
            
            // Clipboard Storage write transaction query sequence pipeline trigger execution logic
            navigator.clipboard.writeText(officialTargetEmailAddress).then(() => {
                // Clean browser alert layout notification validation response prompt
                alert("📋 Email address [" + officialTargetEmailAddress + "] copied to clipboard!\n\nYou can now paste it directly into your Gmail/Outlook dashboard to message me instantly.");
            }).catch(err => {
                console.error("Critical clipboard memory stream writing error tracking context evaluation dump:", err);
                // System alternate fallback prompt processing rule trace configurations mapping updates
                alert("Nee email id: divyasaisri429@gmail.com");
            });
        });
    }
});
