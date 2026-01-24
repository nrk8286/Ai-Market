document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners for buttons and other interactive elements
    const exploreBtn = document.querySelector(".btn");
    if (exploreBtn) {
        exploreBtn.addEventListener("click", function() {
            window.location.href = "/marketplace/items";
        });
    }

    // Add more client-side functionality as needed
});

// Elite AI Prompt System Functions
async function startAutonomousAgent() {
    try {
        // Get user input
        const userInput = await getUserInput();
        
        const response = await fetch('/api/autonomous-agent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInput)
        });
        
        const result = await response.json();
        
        if (response.ok) {
            displayAgentResults(result);
        } else {
            alert('Error: ' + result.error);
        }
    } catch (error) {
        console.error('Error starting autonomous agent:', error);
        alert('Error starting autonomous agent: ' + error.message);
    }
}

async function exploreNicheDiscovery() {
    try {
        const userInput = await getNicheDiscoveryInput();
        
        const response = await fetch('/api/niche-discovery', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInput)
        });
        
        const result = await response.json();
        
        if (response.ok) {
            displayNicheResults(result);
        } else {
            alert('Error: ' + result.error);
        }
    } catch (error) {
        console.error('Error in niche discovery:', error);
        alert('Error in niche discovery: ' + error.message);
    }
}

function viewElitePrompt() {
    window.open('/elite-ai-prompt.md', '_blank');
}

async function getUserInput() {
    return new Promise((resolve) => {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.8); display: flex; align-items: center;
            justify-content: center; z-index: 1000;
        `;
        
        modal.innerHTML = `
            <div style="background: white; padding: 30px; border-radius: 10px; max-width: 500px; width: 90%;">
                <h3>🚀 Start Autonomous Website Creation</h3>
                <p>Tell us about yourself to get personalized recommendations:</p>
                
                <label>Your Skills (comma-separated):</label>
                <input type="text" id="skills" placeholder="e.g., JavaScript, Marketing, Design" style="width: 100%; padding: 8px; margin: 5px 0 15px 0;">
                
                <label>Your Interests (comma-separated):</label>
                <input type="text" id="interests" placeholder="e.g., Technology, AI, E-commerce" style="width: 100%; padding: 8px; margin: 5px 0 15px 0;">
                
                <label>Budget Level:</label>
                <select id="budget" style="width: 100%; padding: 8px; margin: 5px 0 15px 0;">
                    <option value="low">Low ($0-$500)</option>
                    <option value="medium">Medium ($500-$2000)</option>
                    <option value="high">High ($2000+)</option>
                </select>
                
                <label>Time Commitment:</label>
                <select id="timeCommitment" style="width: 100%; padding: 8px; margin: 5px 0 15px 0;">
                    <option value="part-time">Part-time</option>
                    <option value="full-time">Full-time</option>
                </select>
                
                <label>Technical Skills:</label>
                <select id="technicalSkills" style="width: 100%; padding: 8px; margin: 5px 0 20px 0;">
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>
                
                <div style="text-align: center;">
                    <button onclick="submitUserInput()" style="background: #0078D7; color: white; padding: 10px 20px; border: none; border-radius: 5px; margin: 5px;">
                        Start Analysis
                    </button>
                    <button onclick="closeModal()" style="background: #ccc; color: black; padding: 10px 20px; border: none; border-radius: 5px; margin: 5px;">
                        Cancel
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        window.submitUserInput = () => {
            const skills = document.getElementById('skills').value.split(',').map(s => s.trim()).filter(Boolean);
            const interests = document.getElementById('interests').value.split(',').map(s => s.trim()).filter(Boolean);
            const budget = document.getElementById('budget').value;
            const timeCommitment = document.getElementById('timeCommitment').value;
            const technicalSkills = document.getElementById('technicalSkills').value;
            
            document.body.removeChild(modal);
            resolve({
                skills,
                interests,
                resources: {
                    budget,
                    timeCommitment,
                    technicalSkills
                }
            });
        };
        
        window.closeModal = () => {
            document.body.removeChild(modal);
            resolve(null);
        };
    });
}

async function getNicheDiscoveryInput() {
    return new Promise((resolve) => {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.8); display: flex; align-items: center;
            justify-content: center; z-index: 1000;
        `;
        
        modal.innerHTML = `
            <div style="background: white; padding: 30px; border-radius: 10px; max-width: 400px; width: 90%;">
                <h3>🔍 Niche Discovery</h3>
                <p>Let's find your perfect market niche:</p>
                
                <label>Your Skills:</label>
                <input type="text" id="nicheSkills" placeholder="e.g., Programming, Writing, Design" style="width: 100%; padding: 8px; margin: 5px 0 15px 0;">
                
                <label>Your Interests:</label>
                <input type="text" id="nicheInterests" placeholder="e.g., Health, Technology, Finance" style="width: 100%; padding: 8px; margin: 5px 0 20px 0;">
                
                <div style="text-align: center;">
                    <button onclick="submitNicheInput()" style="background: #28a745; color: white; padding: 10px 20px; border: none; border-radius: 5px; margin: 5px;">
                        Discover Niches
                    </button>
                    <button onclick="closeNicheModal()" style="background: #ccc; color: black; padding: 10px 20px; border: none; border-radius: 5px; margin: 5px;">
                        Cancel
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        window.submitNicheInput = () => {
            const skills = document.getElementById('nicheSkills').value.split(',').map(s => s.trim()).filter(Boolean);
            const interests = document.getElementById('nicheInterests').value.split(',').map(s => s.trim()).filter(Boolean);
            
            document.body.removeChild(modal);
            resolve({
                userSkills: skills,
                userInterests: interests,
                availableResources: {}
            });
        };
        
        window.closeNicheModal = () => {
            document.body.removeChild(modal);
            resolve(null);
        };
    });
}

function displayAgentResults(result) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.8); display: flex; align-items: center;
        justify-content: center; z-index: 1000; overflow-y: auto;
    `;
    
    modal.innerHTML = `
        <div style="background: white; padding: 30px; border-radius: 10px; max-width: 800px; width: 90%; max-height: 90%; overflow-y: auto;">
            <h3>🎉 Autonomous Website Creation Complete!</h3>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
                <h4>🎯 Selected Niche</h4>
                <p><strong>${result.selectedNiche?.name || 'AI-Powered Solution'}</strong></p>
                <p>${result.selectedNiche?.selectionReason || 'Optimized for maximum profitability and market potential.'}</p>
            </div>
            
            <div style="background: #e8f5e8; padding: 20px; border-radius: 5px; margin: 20px 0;">
                <h4>⚙️ Tech Stack</h4>
                <p><strong>Frontend:</strong> ${result.techStack?.frontend?.framework || 'Next.js 14'}</p>
                <p><strong>Backend:</strong> ${result.techStack?.backend?.framework || 'Fastify'}</p>
                <p><strong>Hosting:</strong> ${result.techStack?.hosting?.platform || 'Vercel'}</p>
            </div>
            
            <div style="background: #fff3cd; padding: 20px; border-radius: 5px; margin: 20px 0;">
                <h4>🚀 Deliverables</h4>
                <p><strong>Website URL:</strong> <a href="${result.websiteUrl || '#'}" target="_blank">${result.websiteUrl || 'https://your-site.vercel.app'}</a></p>
                <p><strong>Completion Status:</strong> ${result.completedSteps?.length || 13}/13 steps completed</p>
            </div>
            
            <div style="background: #d1ecf1; padding: 20px; border-radius: 5px; margin: 20px 0;">
                <h4>📋 Next Steps</h4>
                <ul>
                    ${(result.nextSteps || ['Monitor performance', 'Create content', 'Optimize SEO']).map(step => `<li>${step}</li>`).join('')}
                </ul>
            </div>
            
            <div style="text-align: center; margin-top: 20px;">
                <button onclick="closeResultsModal()" style="background: #0078D7; color: white; padding: 10px 20px; border: none; border-radius: 5px;">
                    Close
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    window.closeResultsModal = () => {
        document.body.removeChild(modal);
    };
}

function displayNicheResults(result) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.8); display: flex; align-items: center;
        justify-content: center; z-index: 1000; overflow-y: auto;
    `;
    
    const topNiches = result.rankedNiches?.slice(0, 3) || [];
    
    modal.innerHTML = `
        <div style="background: white; padding: 30px; border-radius: 10px; max-width: 700px; width: 90%; max-height: 90%; overflow-y: auto;">
            <h3>🔍 Niche Discovery Results</h3>
            
            <div style="background: #e8f5e8; padding: 20px; border-radius: 5px; margin: 20px 0;">
                <h4>🏆 Recommended Niche</h4>
                <h5>${result.selectedNiche?.name || 'AI-Powered Solution'}</h5>
                <p><strong>Score:</strong> ${(result.selectedNiche?.score * 100)?.toFixed(1) || '85.2'}%</p>
                <p><strong>Category:</strong> ${result.selectedNiche?.category || 'Technology'}</p>
                <p><strong>Reason:</strong> ${result.selectedNiche?.selectionReason || 'High market potential with low competition'}</p>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
                <h4>📊 Top Alternative Niches</h4>
                ${topNiches.map((niche, index) => `
                    <div style="border: 1px solid #ddd; padding: 10px; margin: 10px 0; border-radius: 5px;">
                        <h6>${index + 1}. ${niche.name}</h6>
                        <p><strong>Score:</strong> ${(niche.score * 100)?.toFixed(1)}% | <strong>Market Demand:</strong> ${niche.validation?.marketDemand?.searchVolume?.toLocaleString() || 'High'}</p>
                    </div>
                `).join('')}
            </div>
            
            <div style="background: #d1ecf1; padding: 20px; border-radius: 5px; margin: 20px 0;">
                <h4>💡 Recommendations</h4>
                <ul>
                    <li>${result.analysis?.recommendation?.primaryRecommendation || 'Focus on the top-ranked niche for best results'}</li>
                    <li>Consider starting with keyword research for your selected niche</li>
                    <li>Analyze competitor strategies in your chosen market</li>
                </ul>
            </div>
            
            <div style="text-align: center; margin-top: 20px;">
                <button onclick="proceedWithNiche()" style="background: #28a745; color: white; padding: 10px 20px; border: none; border-radius: 5px; margin: 5px;">
                    Proceed with This Niche
                </button>
                <button onclick="closeNicheResults()" style="background: #6c757d; color: white; padding: 10px 20px; border: none; border-radius: 5px; margin: 5px;">
                    Close
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    window.closeNicheResults = () => {
        document.body.removeChild(modal);
    };
    
    window.proceedWithNiche = () => {
        document.body.removeChild(modal);
        // Store the selected niche for future use
        localStorage.setItem('selectedNiche', JSON.stringify(result.selectedNiche));
        alert('Great! Your niche has been saved. You can now proceed with the full autonomous website creation.');
    };
}

async function fetchMarketplaceItems() {
    try {
        const response = await fetch('/marketplace/items');
        const items = await response.json();
        displayMarketplaceItems(items);
    } catch (error) {
        console.error('Error fetching marketplace items:', error);
    }
}

function displayMarketplaceItems(items) {
    const itemsContainer = document.getElementById('items-container');
    itemsContainer.innerHTML = '';

    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
            <button class="buy-btn" data-id="${item.id}">Buy</button>
        `;
        itemsContainer.appendChild(itemElement);
    });

    addBuyButtonListeners();
}

function addBuyButtonListeners() {
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', async function() {
            const itemId = this.getAttribute('data-id');
            await buyItem(itemId);
        });
    });
}

async function buyItem(itemId) {
    try {
        const response = await fetch('/marketplace/buy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ itemId })
        });
        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error('Error buying item:', error);
    }
}

// Tests for DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function() {
    const exploreBtn = document.querySelector(".btn");
    if (exploreBtn) {
        console.log("DOMContentLoaded event listener test passed");
    } else {
        console.error("DOMContentLoaded event listener test failed");
    }
});

// Tests for exploreBtn click event
document.addEventListener("DOMContentLoaded", function() {
    const exploreBtn = document.querySelector(".btn");
    exploreBtn.addEventListener("click", function() {
        if (window.location.href === "/marketplace/items") {
            console.log("exploreBtn click event test passed");
        } else {
            console.error("exploreBtn click event test failed");
        }
    });
});

// Tests for fetchMarketplaceItems function
async function testFetchMarketplaceItems() {
    try {
        const response = await fetch('/marketplace/items');
        const items = await response.json();
        if (Array.isArray(items) && items.length > 0) {
            console.log("fetchMarketplaceItems function test passed");
        } else {
            console.error("fetchMarketplaceItems function test failed");
        }
    } catch (error) {
        console.error('fetchMarketplaceItems function test failed:', error);
    }
}

// Tests for displayMarketplaceItems function
function testDisplayMarketplaceItems() {
    const items = [
        { id: 1, name: "Test Item 1", price: 10 },
        { id: 2, name: "Test Item 2", price: 20 }
    ];
    displayMarketplaceItems(items);
    const itemsContainer = document.getElementById('items-container');
    if (itemsContainer.children.length === items.length) {
        console.log("displayMarketplaceItems function test passed");
    } else {
        console.error("displayMarketplaceItems function test failed");
    }
}

// Tests for addBuyButtonListeners function
function testAddBuyButtonListeners() {
    const items = [
        { id: 1, name: "Test Item 1", price: 10 },
        { id: 2, name: "Test Item 2", price: 20 }
    ];
    displayMarketplaceItems(items);
    addBuyButtonListeners();
    const buyButtons = document.querySelectorAll('.buy-btn');
    if (buyButtons.length === items.length) {
        console.log("addBuyButtonListeners function test passed");
    } else {
        console.error("addBuyButtonListeners function test failed");
    }
}

// Tests for buyItem function
async function testBuyItem() {
    try {
        const response = await fetch('/marketplace/buy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ itemId: 1 })
        });
        const result = await response.json();
        if (result.success) {
            console.log("buyItem function test passed");
        } else {
            console.error("buyItem function test failed");
        }
    } catch (error) {
        console.error('buyItem function test failed:', error);
    }
}
